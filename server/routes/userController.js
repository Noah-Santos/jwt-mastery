const express = require("express");
const router = express.Router();
const {readAllUsers, createUser, updateUser, deleteUser} = require("../controllers/user");

router.get("/", readAllUsers);
router.post("/", createUser);
router.put("/:oldId", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;