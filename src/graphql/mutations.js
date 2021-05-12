const { }=require('./types');

// const {user}=require('../models');
const user=require('../models/user');
const userpost=require('../models/userPost');
const userComments=require('../models/userComments')

const { GraphQLString, GraphQLInt, GraphQLList }=require("graphql");

const {createToken}=require('../auth/auth');

const userRegister={
    type:GraphQLString,
    args:{
        userName:{type:GraphQLString},
        email:{type:GraphQLString},
        password:{type:GraphQLString},
        mobile:{type:GraphQLInt}
    },
    async resolve(parent,args){
        const { userName, email, password, mobile}=args;
        const users= new user({ userName, email, password, mobile})
        console.log("users",users);
    await users.save()

    const token =createToken(users)
    // return JSON.stringify (token) (it's coming / and string)
      return token;    
    // let users=new user({
    //     userName:args.userName,
    //     email:args.email,
    //     password:args.password,
    //     mobile:args.mobile

    //   })
    //   return users.save();
    }
}
const userlogin ={
    type:GraphQLString,
    args:{
        email:{type:GraphQLString},
        password:{type:GraphQLString}
    },
    async resolve(parent,args){
        const Users =await user.findOne({email:args.email})
        console.log("USERS",Users);
        // if(!user || args.password !== user.password){
        //     return new Error ("invalid password or email")
        // }
        if(!user==args.password){
            console.log("valid password");
        }
        // else{
        //     console.log("invalid password");
        // }
        const token= createToken(user)
        console.log("token ",token);
        return token
    }
}

module.exports={userRegister,userlogin}