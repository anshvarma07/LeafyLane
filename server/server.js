const express=require("express");
const app=express();
const cors=require("cors")

require('dotenv').config({path:"./config.env"})
const port =process.env.PORT || 5000;

// use Middlewares 
app.use(cors())
app.use(express.json())

// mongoDB
const con=(require("./db/connection.js"))


// use Routes
app.use(require("./routes/route"))


app.listen(port,()=>{
    console.log(`Server Running on http://localhost:${port}`)
})