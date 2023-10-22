const model = require("../models/models")


// get Products
async function get_Products(req, res) {
    let data=await model.Products.find({})
    res.json(data)
}



// Post Products
// {id:1,title:'...',price:'...',category:'...',description:'...',image:'...'}
async function create_Products(req, res) {
    const Create = new model.Products({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image:req.body.image
    })

    await Create.save()
        .then(()=>{
            res.send("Done Scene")
        })
}



module.exports = {
    get_Products,
    create_Products,

}