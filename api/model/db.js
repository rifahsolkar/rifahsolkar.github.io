const mongoose = require('mongoose')

const rifSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    tech:{
        type: String,
        required : true
    },
    sub:{
        type : Boolean,
        required : true,
        default:false
    }
})

module.exports = mongoose.model("Rifah",rifSchema)