const mongoose = require('mongoose');


const VendorSchema = new mongoose.Schema({
    mobile:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports= mongoose.model('Vendor' , VendorSchema);