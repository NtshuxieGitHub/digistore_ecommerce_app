import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  try {
    // Establish connection
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
    });
    console.log("Cloudinary connected");
  } catch (error) {
    console.log(`Failed to connect to Cloudinary: ${error.message}`);
  }
};

export default connectCloudinary;
