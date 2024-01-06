const router = require("express").Router();
const {
  registerController,
  loginController,
  
} = require("../controller/auth_Controller.js");
//REGISTER

router.post("/register", registerController);
router.post("/login", loginController);


module.exports = router;
