import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  popular: {
    type: Boolean,
  },
  date: {
    type: Number,
    required: true,
  },
});

const productModel =
  mongoose.model.product || mongoose.model("product", productsSchema);

export default productModel;
