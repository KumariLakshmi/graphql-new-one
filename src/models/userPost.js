const mongoose=require('mongoose');

const userPostSchema=new mongoose.Schema({
    authorId:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("userPost",userPostSchema)
// const mongoose = require("mongoose")

// const postSchema = new mongoose.Schema(
//   {
//     authorId: {
//       type: String,
//       required: true,
//     },
//     title: {
//       type: String,
//       required: true,
//     },
//     body: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// )

// module.exports = mongoose.model("post", postSchema)
