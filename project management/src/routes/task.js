const router = require('express').Router()
const { findTask } = require('../controller/Task_Controller')
const { verifyToken } = require('../middleware/verifytokens')


router.get('/findTask', verifyToken, findTask)


module.exports = router;