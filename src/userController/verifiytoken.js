const jwt=require("jsonwebtoken");
// const { modelName } = require("../models/user");

const authenticate=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ") [1] || ""
try {
    const verified=jwt.verify(token,process.env.JWT_SECRET)
    // const verified=jwt.decode(token,process.env.JWT_SECRET)
    req.verifiedUser=verified
    console.log("token verified success!!",verified);
    next()
} catch (error) {
    // console.log("token verified falied!!",error)
    // console.log(error);
    next()
}

}

module.exports={authenticate}