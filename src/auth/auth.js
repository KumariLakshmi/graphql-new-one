const jwt=require("jsonwebtoken");

const createToken= (user)=>{
    // return jwt.sign(user,"123454",{
    //     expiresIn:"1 hr"
    // })
    return jwt.sign({user},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}

module.exports={createToken}