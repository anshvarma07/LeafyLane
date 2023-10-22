const routes=require('express').Router()
const products_controller=require("../controller/products_controller")
const category_controller=require("../controller/category_controller")


routes.route('/products')
    .get(products_controller.get_Products)
    .post(products_controller.create_Products)

routes.route('/products/categories')
    .get(category_controller.get_Category)
    .post(category_controller.create_Category)

module.exports=routes;