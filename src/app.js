import express from "express";
import cors from "cors"
import cookieParser from "cookie-Parser"
const app=express()
//use middleware
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))


//importing routes
import userRouter from './routes/user.routes.js'


//app.get nahi kaam krega beta
//route declaration:
app.use("/api/v1/users",userRouter)

//http://localhost:8000/api/v1/users/register
export {app}

