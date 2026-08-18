 import mongoose, { connect } from "mongoose";

//  const dns=require("dns")
//  dns.setServers([
//     '0.0.0.0'
//     '1.1.1.1' , 
//     '8.8.8.8'
//  ])
//dubey:-
//dubey's code starts
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
import {DB_NAME}  from "../constants.js";

//dubey's code ends

const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n MONGODB connected !! DB HOST:${connectionInstance.connection.host}`);

    }
    catch(error){
        console.log("mongodb connection error" , error);
        process.exit(1);
    }
}
export default connectDB






