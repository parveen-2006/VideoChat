const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000 ;
const ChatsRoute = require("./Routes/Chats.route");
const userRoute = require("./Routes/User.route");
const connectDB = require("./config/db");
const cors = require("cors");
const authVerify = require("./Auth/authVerify");

connectDB(); // database 

// middlewares 
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json())
app.use("/chats" , ChatsRoute);
app.use("/user" , userRoute);
app.use("/auth" , authVerify)


app.listen(PORT , ()=>{
    console.log("Server is working")
});