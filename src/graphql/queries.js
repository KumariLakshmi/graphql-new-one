const { GraphQLList }=require("graphql");

const { UserType }=require('./types');

const user=require('../models/user');

const User={
    type: new GraphQLList(UserType),
    resolve(parent,args){
        return user.find()
    }
}

module.exports={User}