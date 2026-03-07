const jwt = require("jsonwebtoken");
const User = require("../Model/User.model");

const authVerify = async () => {
  try {
    if(req.headers && req.header.authorization){
        let token = req.header.authorization.spilt(" ")[1];
        const JWT_SECRET = "videoChat";
        const decodedUser = jwt.verify("")
    }

  } catch (err) {
    console.log("Auth err" , err.message)
    res.status(403).json({
      success: false,
      message: "Not authorized",
    });
  }
};

module.exports = authVerify;