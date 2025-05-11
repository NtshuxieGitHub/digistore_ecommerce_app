// Import Cloudinary SDK and dotenv
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Controller function for adding a product
const addProduct = async (req, res) => {
  try {
    // Destructure the request body
    const { name, description, price, category, subCategory, sizes, popular } =
      req.body;

    // Extract uploaded images from request
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    // Filter out any undefined images
    const images = [image1, image2, image3, image4].filter(Boolean);

    // Upload images to Cloudinary
    let imgUrl;
    if (images.length > 0) {
      imgUrl = await Promise.all(
        images.map(async (img) => {
          const result = await cloudinary.uploader.upload(img.path, {
            resource_type: "image",
          });
          return result.secure_url;
        })
      );
    } else {
      // Use placeholder image if none provided
      imgUrl = ["https://via.placeholder.com/150"];
    }

    // Construct product object
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: sizes ? JSON.parse(sizes) : [],
      popular: popular === "true",
      image: imgUrl,
      date: Date.now(),
    };

    // Save product to database
    const product = new productModel(productData);
    await product.save();

    // Respond with success
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.json({ success: false, message: error.message });
  }
};

// Placeholder function for removing a product
const removeProduct = async (req, res) => {
  try {
    // Delete product
    await productModel.findByIdAndDelete(req.body.id);

    // Respond with success
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error("Error removing product:", error);
    res.json({ success: false, message: error.message });
  }
};

// Placeholder function for listing all products
const productList = async (req, res) => {
  try {
    // Fetch all products
    const products = await productModel.find({});

    // Respond with success
    res.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching product list:", error);
    res.json({ success: false, message: error.message });
  }
};

// Placeholder function for fetching a single product
const singleProduct = async (req, res) => {
  try {
    // Get product id
    const { prodId } = req.body;

    // Fetch product
    const product = await productModel.findById(prodId);

    // Respond with success
    res.json({ success: true, product });
  } catch {
    console.error("Error fetching single product:", error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, removeProduct, singleProduct, productList };
