const { GraphQLList, GraphQLID }=require("graphql");

const { UserType,PostType,CommentType }=require('./types');

const user=require('../models/user');
const userPost=require("../models/userPost")
const userComments=require('../models/userComments')

const User={
    type: new GraphQLList(UserType),
    description:"get all user",
    resolve(parent,args){
        return user.find()
    }
}
const oneuser={
    type:UserType,
    description:"one user",
    args:{id:{type:GraphQLID}},
    resolve(parent,args){
        return user.findById(args.id)
    }
}
const alluserpost={
    type:new GraphQLList(PostType),
    description:"get all post list",
    resolve(parent,args){
        return  userPost.find()
    }
}
const oneuserpost={
    type:PostType,
    description:"one user",
    args:{id:{type:GraphQLID}},
    resolve(parent,args){
        return user.findById(args.id)
    }
}
const allcomments = {
    type: new GraphQLList(CommentType),
    description: " list of comments",
    resolve() {
      return userComments.find()
    },
  }
  
  const onecomment = {
    type: CommentType,
    description: " one comment",
    args: { id: { type: GraphQLID } },
    resolve(_, args) {
      return userComments.findById(args.id)
    },
  }

module.exports={User,oneuser,alluserpost,oneuserpost,allcomments,onecomment}