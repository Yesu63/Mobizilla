const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const registerModel = require("./model/registerSchema");
const cartModel = require("./model/cartSchema");
const orderModel = require("./model/myOrderSchema");
const purchaseModel = require("./model/orderSchema");
const addressModel = require("./model/addressSchema")
const contactModel = require("./model/contactSchema");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/Mobizilla").then(()=>{
    console.log("connected")
});

app.post("/register", async (req, res) => {
    try {
        const userExists = await registerModel.exists({userName: req.body.userName});
        if(userExists) {
            res.status(400).json({message: "Username already exists"});
        } else {
            registerModel.create(req.body)
                .then(details => res.json(details))
                .catch(err => res.json(err));
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Server error"});
    }
});

app.post("/cart", (req, res) => {
    const { userName, cartId } = req.body;
    cartModel.findOne({ userName: userName })
        .then(cart => {
            if (cart === null) {
                cartModel.create(req.body)
                    .then(cart => res.json(cart))
            } else {
                cart.cartId = cartId;
                cart.save();
                res.json(cart)
            }
        })
        .catch(err => {
            res.json(err)
        })
});

app.post("/contact", (req, res) => {
    const {userName,fullName,email,phone,message } = req.body;
    contactModel.findOne({ userName: userName })
        .then(cart => {
            if (cart === null) {
                contactModel.create(req.body)
                    .then(cart => res.json(cart))
            }
            else{
                cart.fullName = fullName
                cart.email = email
                cart.phone = phone
                cart.message = message
                cart.save();
                res.json(cart)
            } 
        })
        .catch(err => {
            res.json(err)
        })
});

app.post("/contact1", (req,res)=> {
    const {userName} = req.body;
    contactModel.findOne({userName:userName})
        .then(cart => res.json(cart) )
        .catch(err => res.json(err))
} )

app.post("/purchaseDetails", (req, res) => {
    const { userName, purchaseData } = req.body;
    purchaseModel.findOne({ username: userName })
        .then(details => {
            if (details === null) {
                purchaseModel.create({ username: userName, purchaseData })
                    .then(details => res.json(details))
            } else {
                details.purchaseData = purchaseData;
                details.save();
                res.json(details)
            }
        })
        .catch(err => {
            res.json(err)
        })
});

app.post("/myOrders", (req, res) => {
    const { userName, orderId, quantity, totalAmount } = req.body;

    orderModel.findOne({ userName: userName })
        .then(order => {
            if (order === null) {
                orderModel.create(req.body)
                    .then(order => res.json(order))
            } else if( order !== null ) {
                order.orderId = orderId;
                order.quantity = quantity;
                order.totalAmount = totalAmount;
                order.save();
                order.json(order)
            }
        })
        .catch(err => {
            res.json(err)
        })
});

app.post("/address", (req,res)=>{
    const {userName , phoneNumber , address } = req.body;
    addressModel.findOne({ userName: userName })
        .then(add => {
            if (add === null) {
                addressModel.create(req.body)
                    .then(add => res.json(add))
            } else{
                add.phoneNumber = phoneNumber;
                add.address = address;
                add.save()
                    .then(() => {
                        res.json({ phoneNumber: add.phoneNumber, address: add.address }) 
                    })
            }
        })
        .catch(err => {
            res.json(err)
        })
})

app.post("/address/retrive", (req,res)=> {
    const {userName} = req.body;
    addressModel.findOne({userName:userName})
        .then(cart => res.json(cart) )
        .catch(err => res.json(err))
} )

app.post("/cart/remove", (req, res) => {
    const { userName, cartId } = req.body;
    cartModel.findOne({ userName: userName })
        .then(cart => {
            if (cart === null) {
                res.json({ message: "Cart not found" });
            } else {
                const cartIdIndex = cart.cartId.indexOf(cartId);
                if (cartIdIndex !== -1) {
                    cart.cartId.splice(cartIdIndex, 1);
                }
                cart.save();
                res.json(cart);
            }
        })
        .catch(err => {
        })
});

app.post("/cart/empty", (req,res)=>{
    const {userName} = req.body;
    cartModel.updateOne({userName:userName},
        {$set: {cartId:[]}})
        .then(cart => res.json(cart) )
        .catch(err => res.json(err))
})

app.post("/cart/querry", (req,res)=> {
    const {userName} = req.body;
    cartModel.findOne({userName:userName})
        .then(cart => res.json(cart) )
        .catch(err => res.json(err))
} )
app.post("/purchaseDetails/querry", (req,res)=> {
    const {username} = req.body;
    purchaseModel.findOne({username:username})
        .then(cart => res.json(cart) )
        .catch(err => res.json(err))

} )

app.post("/myOrders/request", (req,res)=> {
    const {userName} = req.body;
    orderModel.findOne({userName:userName})
        .then(order => res.json(order) )
        .catch(err => res.json(err))

} )

app.post("/login", (req,res)=>{
    const {userName, password} = req.body;
    registerModel.findOne({userName: userName})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success");
            }
            else{
                res.json("Password Incorrect")
            }
        }else{
            res.json("No user found")
        }
    }).catch(err=>res.json(err))
})

app.listen(3002, ()=>{
    console.log("server is running");
})