const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    participants : []
})

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;