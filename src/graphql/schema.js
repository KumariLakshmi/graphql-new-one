const { GraphQLObjectType, GraphQLSchema }=require("graphql");



//import the queries file

const {User}=require('./queries');
//import the mutations file

const{userRegister,userlogin}=require('./mutations');


//explain the query type(types only using GraphQLObjectType)
const Querytype=new GraphQLObjectType({
    name:"QUERYTYPES",
    description:"Querytypes",
    fields:{User}
});
//explain the mutation type
const mutationstype=new GraphQLObjectType({
    name:"MUTATIONSTYPES",
    description:"mutationstype",
    fields:{userRegister,userlogin}
})
//schema only using query and mutation
module.exports=new GraphQLSchema({
    query:Querytype,
    mutation:mutationstype
})