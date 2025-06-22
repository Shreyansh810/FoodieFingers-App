import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// app config
dotenv.config();
const app = express();
const PORT = 5002;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use('/api/order', orderRouter) // Under Construction

app.get("/", (req, res) => {
    res.send("API working");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})