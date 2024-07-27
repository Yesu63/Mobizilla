const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userName : String,
    cartId:[Number]
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;


