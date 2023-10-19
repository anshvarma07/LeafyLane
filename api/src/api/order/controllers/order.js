"use strict";

const stripe = require("stripe")(process.env.STRIPE_KEY);
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    const lineItems=await Promise.all(
      products.map(async (product)=>
          {const item=await strapi
            .service("api::product.product")
            .findOne(product.id);


            return{
              price_data:{
                currency:"INR",
                product_data:{
                  name:"hello", 
                },
                unit_amount:40000
              },
              quantity:item.quantity
            }
          })
    );
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
        shipping_address_collection:{allowed_countries:["IN"]},
        payment_method_types:["card"] 
      });

      await strapi.service("api::order.order").create({
        data:{
          products, 
          stripeId:session.id
        },
      });

      return {stripeSession:session}
      
    } catch (error) {
      ctx.response.status = 500;
      return err;
    }
  },
}));
