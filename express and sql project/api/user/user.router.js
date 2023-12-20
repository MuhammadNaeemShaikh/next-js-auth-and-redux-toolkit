const express = require('express')
const router = express.Router();
const { createUser, getUsers, getUserUsingId, login } = require('./user.controller')
const { userAuth,adminAuth } = require('../../config/middleware/verifyToken')

router.post("/", createUser)
router.get("/", adminAuth, getUsers)
router.get("/:id", getUserUsingId)
router.post("/login", login)


module.exports = router;