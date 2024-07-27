const express=require('express');
const app=express();
require('dotenv').config()
const port=process.env.PORT;



const cors = require('cors')
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow these HTTP methods
    next();
  });
app.listen(port)



//establishing mongodb connection
const mongoose =require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/UITRUST").then(()=>{
    console.log(`backend is running at port ${port}`)
}).catch(()=>{
    console.log("connection unsuccessful")
})