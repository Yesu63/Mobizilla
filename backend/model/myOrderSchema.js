const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userName : String,
    orderId:[Number],
    quantity:[Number],
    totalAmount:[String]
});

const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;