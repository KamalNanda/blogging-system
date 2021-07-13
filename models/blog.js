const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
    title : {
        type : String, 
        required : true
    },
    body : {
        type : String,
        required : true
    },
    createdBy : {
        type : String, 
        required : true
    },
    likedBy : {
        type : Array,
        default : []
    },
    createdOn : {
        type : Date, 
        default : Date.now
    },
    image : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Blog" , blogSchema)