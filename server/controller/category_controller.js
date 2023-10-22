const model = require("../models/models")


// get Category
async function get_Category(req, res) {
    let data=await model.Category.find({})
    res.json(data)
}



// Post Category
// {title:'...',image:'...'}
async function create_Category(req, res) {
    const Create = new model.Category({
        title: req.body.title,
        image:req.body.image
    })

    await Create.save()
        .then(()=>{
            res.send("Done Scene")
        })
}



module.exports = {
    get_Category,
    create_Category,

}