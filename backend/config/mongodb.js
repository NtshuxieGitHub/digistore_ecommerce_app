import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Establish connection
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`Failed to connect to MongoDB: ${error.message}`);
  }
};

export default connectDB;
