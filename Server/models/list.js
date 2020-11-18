const mongoose = require('mongoose');


const ListSchema = new mongoose.Schema({
    status:{
        type: Number,
        // required: true
    },
    items:[{
    //    title:{
    //     type: String,
    //     required: true
    //    }, 
    //    description:{
    //     type: String,
    //     required: true
    //    }, 
    //    price:{
    //     type: Number,
    //     required: true
    //    }, 
    }]
});

module.exports= mongoose.model('List' , ListSchema);