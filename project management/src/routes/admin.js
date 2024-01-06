const router = require('express').Router()
const { changeRoleClt, getAllUsers, createProjectClt, getProjectTeamClt, assignTask } = require('../controller/admin_Controller')
const { verifyTokenAndAdmin } = require('../middleware/verifytokens')

//change Role Clt
router.patch('/updateRole', verifyTokenAndAdmin, changeRoleClt);
router.get('/getAllUsers', verifyTokenAndAdmin, getAllUsers);
router.post('/createNewProject', verifyTokenAndAdmin, createProjectClt);
router.get('/getProjectTeamClt/:_id', verifyTokenAndAdmin, getProjectTeamClt);
router.post('/assignTask', verifyTokenAndAdmin, assignTask);


module.exports = router;