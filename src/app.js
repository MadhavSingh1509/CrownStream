// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// const app = express();

// // Middleware
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));

// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));

// // Routes
// import userRouter from "./routes/user.routes.js";
// app.get("/", (req, res) => {
//     res.status(200).send("Backend is working!");
// });
// //temp:app.use("/api/v1/users", userRouter);

// export { app };
//gpt
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Routes
import userRouter from "./routes/user.routes.js";

app.get("/", (req, res) => {
    res.status(200).send("Backend is working!");
});

app.use("/api/v1/users", userRouter);

export { app };