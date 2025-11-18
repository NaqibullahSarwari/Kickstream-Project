import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./mongoose.js";
import webhookRoutes from "./Routes/webhookRoutes.js";
import streamRoutes from "./Routes/streamRoutes.js";

dotenv.config();

const server = express();

// Connect to MongoDB (non-blocking)
connectDB().catch(err => {
  console.error("Failed to connect to MongoDB:", err);
});

// CORS middleware
server.use(cors());

// IMPORTANT: Webhook route must come BEFORE body parsing middleware
// LiveKit sends webhooks as raw text, not JSON
// Apply raw body parser only to webhook routes
server.use("/api/webhooks", express.raw({ type: "*/*" }), webhookRoutes);

// Body parsing middleware (after webhook route)
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// API routes
server.use("/api", streamRoutes);

// Health check endpoint
server.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

