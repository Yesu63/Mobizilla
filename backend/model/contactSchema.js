const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    userName:{
        type : String,
        required : true
    },
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
})

const contactModel = mongoose.model("contacts", contactSchema);

module.exports = contactModel;