const { GraphQLObjectType, GraphQLInt,GraphQLID, GraphQLString, GraphQLList }=require("graphql");

// const {user,userPost,userComments}=require('../models')
// const {user,userPost,userComments}=require("../models")
const user=require('../models/user');
const userpost=require('../models/userPost');
const userComments=require('../models/userComments')

const UserType= new GraphQLObjectType({
    name:"User",
    description:"USER TYPE",
    fields:()=>({
        id:{type:GraphQLID},
        userName:{type:GraphQLString},
        email:{type:GraphQLString},
        mobile:{type:GraphQLInt}
    })
})

const PostType=new GraphQLObjectType({
    name:"Post",
    description:"POST TYPE",
    fields:()=>({
        id:{type:GraphQLID},
        authorName:{type:GraphQLString},
        title:{type:GraphQLString},
        year:{type:GraphQLInt},
        author:{
            type:UserType,
            resolve(parent,args){
                return user.findById(parent.authorId)
            }
        },
        comments:{
            type:GraphQLList(CommentType),
            resolve(parent,args){
                return userComments.find({postId:parent.id})
            }
        }
    })
})

const CommentType=new GraphQLObjectType({
    name:"Comment",
    description:"COMMENT TYPE",
    fields:()=>({
        id:{
            type:GraphQLID
        },
        comment:{type:GraphQLString},
        user:{
            type:UserType,
            resolve(parent,args){
                return user.findById(parent.userId)
            },
            post:{
                type:PostType,
                resolve(parent,args){
                    return userPost.findById(parent.postId)
                }
            }
        }
    })
})

module.exports={UserType,PostType,CommentType}