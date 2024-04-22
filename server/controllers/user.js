const User = require("../models/User");
//post put and get one all require success true/false

//Get function for all users
//get "/"
const readAllUsers = async (req, res) => {
    try {
        let item = await User.find({});
        res.json({success: true, data: item});
    } catch(err) {
        console.log(err)
    }
}

//post "/"
const createUser = async(req, res) => {
    try {
        const {username, password} = req.body;
        let item = await User.findOne({email: email});
        let allUsers = await User.find({});
        if(!username || !password){
            console.log("not all fields are filled out");
            return res.json({data: [], success: false, msg: "Please fill out all fields"})
        } else if(item != null) {
            console.log("a user with that email already exists");
            return res.json({data: [], success: false, msg: "that email's already taken, try another"})
        } else {
            let itemTwo = await User.create({username:username, id:allUsers.length+1, password:password});
            res.json({success: true, data: itemTwo});
        }
    } catch(err) {
        console.log(err);
    }
}

//put "/:oldId"
const updateUser = async(req, res) => {
    try {
        const {oldId} = req.params;
        let item = await User.findOneAndUpdate({id: oldId}, req.body);
        if(!item) {
            return res.json({success: false, data: []});
        }
        res.json({data: item, success: true})
    } catch(err) {
        console.log(err);
    }
}

//delete "/:id"
const deleteUser = async(req, res) => {
    //reassign the assigned ones
    try {
        const {id} = req.params;
        let item = await User.findOneAndDelete({id: id});
        if(item == null) {
            console.log("no user exists with that id");
            res.json({success: false, msg: "no user exists with that id"})
        } else {
            console.log(item);
            res.json({data: item, success: true});
        }
    } catch(err) {
        console.log(err);
    }
}

module.exports = {readAllUsers, createUser, updateUser, deleteUser};