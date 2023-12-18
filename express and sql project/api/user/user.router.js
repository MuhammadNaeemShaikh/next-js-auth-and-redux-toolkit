const express = require('express')
const router = express.Router();
const { createUser, getUsers, getUserUsingId,login } = require('./user.controller')


router.post("/", createUser)
router.get("/", getUsers)
router.get("/:id", getUserUsingId)
router.post("/login", login)


module.exports = router;