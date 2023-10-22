const mongoose=require("mongoose");


const conn=mongoose.connect(process.env.ATLAS_URI)
    .then(db=>{
        console.log("DATABASE CONNECTED")
    }).catch(err=>{
        console.log("Console log Error")
    })

module.exports=conn; 