const mongoose = require("mongoose");



const registerSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    userName : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type:String,
        required : true
    },
    confirmPassword : {
        type:String,
        required : true
    },
    
    cartId:[Number]
});

const registerModel = mongoose.model("registeration", registerSchema);

module.exports = registerModel;