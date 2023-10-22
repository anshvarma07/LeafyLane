const mongoose=require('mongoose');

const Schema=mongoose.Schema;

// Products
// {id:1,title:'...',price:'...',category:'...',description:'...',image:'...'}
const products_model=new Schema({
    id:{type:String , default: "No id Passed"},
    title:{type:String , default: "No title"},
    price:{type:Number , default: "No Price"},
    category:{type:String , default: "No Category"},
    description:{type:String , default: "No Description"},
    image:{type:String , default:"No Photo"}
})


const category_model=new Schema({
    title:{type:String , default: "No title"},
    image:{type:String , default:"No Photo"}
})

const Products=mongoose.model('products',products_model)
const Category=mongoose.model('category',category_model)

exports.default=Products;

module.exports={
    Products,Category
}