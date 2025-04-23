const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")

router.post("/user",userController.createUser)
router.get("/user/:id", userController.getUserById);
router.put("/user",userController.updateUser)
router.delete("/user/:id",userController.deleteUser)
module.exports = router