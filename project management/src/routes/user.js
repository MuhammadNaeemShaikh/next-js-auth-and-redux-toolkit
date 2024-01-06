const { verifyToken } = require('../middleware/verifytokens');
const { updatedPrfile, sendEmail, verifyOtp, changedPassword, findTask } = require('../controller/user_Controller');
const router = require('express').Router();


router.patch('/UpdateProfile', verifyToken, updatedPrfile);
router.post('/sendEmail', sendEmail);
router.post('/verifyOtp', verifyOtp)
router.post('/changedPassword', changedPassword)
router.post('/changedPassword', changedPassword)



module.exports = router;
