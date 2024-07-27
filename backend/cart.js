const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cartModel = require("./model/cartSchema");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Mobizilla");
app.post("/cart", (req,res)=>{
    // if(registerModel.exists({userName:req.body.userName} ){
        cartModel.create(req.body).then(details => res.json(details)).catch(err=>res.json(err));
    }
)

app.listen(3002, ()=>{
    console.log("server is running");
})