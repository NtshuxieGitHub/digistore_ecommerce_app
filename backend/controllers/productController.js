import { v2 as cloudinary } from "cloudinary";

// Controller function for adding a product
const addProduct = async (req, res) => {
  try {
    // Destructure the request body
    const { name, description, price, category, subCategory, sizes, popular } =
      req.body;

    // Extract images (if provided)
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    // Filter out undefined images
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // Upload images to cloudinary
  } catch (error) {}
};

// Controller function for removing a product
const removeProduct = async (req, res) => {
  try {
  } catch (error) {}
};

// Controller function for single product details
const productDetails = async (req, res) => {
  try {
  } catch (error) {}
};

// Controller function for product list
const productList = async (req, res) => {
  try {
  } catch (error) {}
};

export { addProduct, removeProduct, productDetails, productList };
