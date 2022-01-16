import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import tokensHandler from "./routes/tokens.routes.js";
import attributeHandler from "./routes/attributes.routes.js";
import dotenv from "dotenv";

// init
const app = express();
dotenv.config({ path: "./config/.env" });

// mongodb connection
const conn = await mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log(`MongoDB Connected: ${conn.connection.host}`);

// middlewares
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// routes
app.use("/tokens", tokensHandler);
app.use("/attributes", attributeHandler);

// running the server
const PORT = process.env.PORT || 1717;
app.listen(PORT, () => {
  console.log(`Server up and Listening @ http://localhost:${PORT}`);
});
