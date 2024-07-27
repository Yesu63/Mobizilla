const mongoose = require("mongoose");


const purchaseSchema = new mongoose.Schema({
    username: String,
    purchaseData: [
        {
            cartIds: Array,
            actualAmount: Number,
            totalAmount : Number
        }
    ]
});


const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = purchaseModel;