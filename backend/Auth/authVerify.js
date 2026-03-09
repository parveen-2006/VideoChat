const jwt = require("jsonwebtoken");
const User = require("../Model/User.model");
require("dotenv").config();

const authVerify = async () => {
  try {
    if (req.headers && req.header.authorization) {
      let token = req.header.authorization.spilt(" ")[1];
      let JWT_SECRET = process.env.JWT_SECRET;
      console.log(JWT_SECRET);
      const decodedUser = jwt.verify("");
    }
  } catch (err) {
    console.log("Auth err", err.message);
    res.status(403).json({
      success: false,
      message: "Not authorized",
    });
  }
};

module.exports = authVerify;
