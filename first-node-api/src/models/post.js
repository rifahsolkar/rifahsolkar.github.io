const mongoose = require('mongoose')
const {Schema} = mongoose;

const postSchema = new Schema({
    title: String,
    author: String,
    content: String,
    date: {type: Date, default: Date.now },
    hidden: {type: Boolean, default: false}
});

module.exports= mongoose.model('Post',postSchema)