const express=require('express');
const app=express();
const dotenv=require('dotenv')
const graphqlHTTP = require("express-graphql").graphqlHTTP
// const schema=require("./src/graphql/schema")
const schema=require("./graphql/schema")
dotenv.config();
const db=require('./master/db')

// const {createToken}=require('./auth/auth');
const {authenticate}=require('./userController/verifiytoken')
//middleware
app.use(authenticate)

app.get("/",(req,res)=>{
    // console.log(req.verifiedUser);
    res.send({msg:"it's working using /graphql"})

});
// app.get('/tokentest',(req,res)=>{
// res.json(createToken({
//     userName:"kumari",
//     email:"kumari96sri@gmail.com",
//     mobile:9940537528,
//     password:"kumari"
//     })
//  )
// })
app.use("/graphql", 
    graphqlHTTP({
    schema:schema,
    graphiql:true

    })
)
app.listen(process.env.PORT,()=>{
    console.log(`server is running successfully at ${process.env.PORT}`);
})