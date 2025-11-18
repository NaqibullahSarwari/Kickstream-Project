import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/kickstream");
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    console.error("⚠️  Please make sure MongoDB is running!");
    console.error("   Start MongoDB with: mongod");
    console.error("   Or start MongoDB service on Windows");
    // Don't exit - allow server to start but warn that DB operations will fail
    // The server can still respond to health checks
  }
};

export default connectDB;

