const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    mobile:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
        // select: false,

    },
},
 {timestamps: true} )

module.exports = mongoose.model("user", userSchema)
