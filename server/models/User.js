const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type:String,
    },
    id:{
        type:Number
    },
    password:{
        type:String
    }
}, {collection: "User"})

module.exports = mongoose.model("User", userSchema);