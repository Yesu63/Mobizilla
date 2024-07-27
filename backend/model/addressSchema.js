const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    userName: {
        type:String,
        required : true
    },
    phoneNumber : {
        type:String
    },
    address : {
        type:String
    }
})

const addressModel = mongoose.model("Address", addressSchema);

module.exports = addressModel;