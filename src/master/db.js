const mongoose=require("mongoose");

mongoose.connect(process.env.DBURL,{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:true},
    (err,result)=>{
        if(err){
            console.log("db err",err);
        }
        else{
            console.log("db connected");
        }

    })