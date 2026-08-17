//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import {DB_NAME}  from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})
connectDB();

/* import express from "express";
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
