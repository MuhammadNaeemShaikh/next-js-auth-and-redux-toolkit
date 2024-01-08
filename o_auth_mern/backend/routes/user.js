const express = require('express');
const { signUpAuth, googleCallbackAuth } = require('../controllers/user_controller');

const router = express.Router();

router.get('/auth/google', signUpAuth);
router.get('/auth/google/callback', googleCallbackAuth);

module.exports = router;
