//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import {DB_NAME}  from "./constants";
import connectDB from "./db/index.js";

import express from "express";
const app = express();

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server running at port: ${process.env.PORT}`);
        
    })
})
.catch(
    (err)=>{
        console.log("mongo db connection failed!!!");
    }
)

/* 
incomplete code snippet:
ignore it:
import express from "express";
// const app=express()
// ;(async()=>{
// try{
// await mongoose.connect(`${
//     process.env.MONGODB_URI} /${DB_NAME}`)
// }
// }
//     catch(errr){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })() */