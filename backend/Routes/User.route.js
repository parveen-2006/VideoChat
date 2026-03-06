const express = require("express");
const User = require("../Model/User.model");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    console.log("jj")
        console.log(req.body);

    let { name, email, password } = req.body;
    //Validation
    if ((!name || !email || !password)) {
      res.status(401).json({
        success: false,
        message: "Fill you data",
      });
    }
    const newUser = await User.create({
      name,
      email,
      password,
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

module.exports = router;
