const express = require("express");
const User = require("../Model/User.model");
const router = express.Router();
const jwt = require("jsonwebtoken");
const brcypt = require("bcrypt");
require("dotenv").config();

// Register route
router.post("/register", async (req, res) => {
  try {
    let { name, email, password, confirmPassword } = req.body;
    //Validation
    if (!name || !email || !password || !confirmPassword) {
      res.status(401).json({
        success: false,
        message: "Fill you data",
      });
    }
    console.log(confirmPassword, password);
    if (password !== confirmPassword) {
      res.status(401).json({
        success: false,
        message: "password mismatched",
      });
    }

    //hash password
    const hashedPassword = await brcypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      success: true,
      message: "User Registered successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Register route :  Internal Server Error",
    });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    let registeredUser = await User.findOne({ email });
    // console.log(registeredUser);

    if (!registeredUser) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    //comapre password
    const isMatch = brcypt.compare(password, registeredUser.password);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        message: "invalid Credentials",
      });
    }

    let tokenpayload = {
      registeredUser,
    };

    const JWT_SECRET = process.env.JWT_SECRET;
    console.log("jwt secret :", JWT_SECRET);

    let token = jwt.sign(tokenpayload, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(200).json({
      success: true,
      token,
      message: "login successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Login route : Internal server error",
    });
  }
});

module.exports = router;
