import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Function for creating a JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Controller function for user login
const loginUser = async (req, res) => {
  try {
    // Destructure email and password
    const { email, password } = req.body;

    // Check if user exists
    const user = await userModel.findOne({ email });

    if (!user) {
      // If user does retrun success failure with message
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    // Check if password is correct (password decryption)
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // If password is correct, create token and return success with token
      const token = createToken(user._id);
      return res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    // Return an error
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Controller function for user registration
const registerUser = async (req, res) => {
  try {
    // Destructure name, email and password
    const { name, email, password } = req.body;

    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Invalid email format. Enter a valid email address",
      });
    }

    // Check and validate password strength
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Save new user
    const user = await newUser.save();

    // Create a JWT token
    const token = createToken(user._id);

    // Return success message with the token
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    // Return an error
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Controller function for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
