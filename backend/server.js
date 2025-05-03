import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to DB
connectDB();

// Connect to cloudinary
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

// API endpoints
app.get("/", (req, res) => res.send("API IS LIVE!!!"));
app.listen(port, () => console.log(`SERVER IS RUNNING ON PORT: ${port}`));
