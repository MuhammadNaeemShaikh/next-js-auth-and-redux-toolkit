const { GeneratePassword } = require('../utils');
const ErrorHandler = require('../utils/ErrorHandler');
const generateRandomNo = require('../utils/generatingRandomNo')
const EmailSender = require('../utils/email')
const { STATUS_CODE } = require('../utils/status_code')
const { UserModel, OtpModel } = require('../Model/index');

//<--------------------------- update Profile ---------------------------------->
const updatedPrfile = async (req, res, next) => {
  try {

    const { _id } = req.user;

    const findUser = await UserModel.findOne({ _id })

    const hashPass = await GeneratePassword(req.body.password, findUser.salt)

    req.body.password = hashPass;

    const user = await UserModel.findOneAndUpdate(
      { _id },
      { ...req.body },
      { new: true }
    );

    res.status(200).json({
      success: 1,
      message: "Profile Updated"
    });
  } catch (error) {
    next(error);
  }
};


//<---------------------------forget password scenario-------------------------->

//sending email clt

const sendEmail = async (req, res, next) => {
  try {


    const { email } = req.body

    //check user exist in db
    let user = await UserModel.findOne({ email });

    if (user) {
      //generate otp 

      //initialize obj
      const generateOtp = new generateRandomNo(4);

      const otpGenerate = await generateOtp.generateOtp();

      //saving generate otp in db

      let otpData = new OtpModel({
        email,
        code: otpGenerate,
        expiresIn: new Date(Date.now() + 60000),
        // expiresIn: new Date().getTime() + 0.002 * 1000
      });

      await otpData.save();

      //sending email to user email

      const subject = ' Password Reset - Verification Code'
      const body = `
                  Hello,

                  You recently requested to reset your password. Please use the following verification code to proceed with the password reset:
    
                  Verification Code: ${otpGenerate}
    
                  If you did not request a password reset, please ignore this email.
    
                  Thank you`


      const sentEmail = EmailSender({ to: email, subject, text: body });

      return res.status(STATUS_CODE.OK).json({
        success: 1,
        message: "Please Check Your Email"
      })


    } else {
      throw new ErrorHandler('Your email id doesnot exist in Our Records', STATUS_CODE.NOT_FOUND);
    }
  } catch (error) {
    next(error)
  }
}

//<--------------------------- verify otp -------------------------------------->

const verifyOtp = async (req, res, next) => {
  try {

    const { email, otp } = req.body;

    const findOtp = await OtpModel.findOne({
      email,
      code: otp
    })

    if (findOtp) {
      return res.status(STATUS_CODE.OK).json({
        success: 1,
        message: "Verified"
      })
    } else {
      return res.status(STATUS_CODE.NOT_FOUND).json({ success: 0, message: "Not Matched" })
    }
  } catch (error) {
    next(error)
  }
}

//<--------------------------- changed password -------------------------------->

const changedPassword = async (req, res, next) => {
  try {
    const { email, password, confirmPass } = req.body;

    if (password !== confirmPass) {
      throw new ErrorHandler(
        'Password and confirm password are not same',
        STATUS_CODE.MISSING_OR_INCORRECT_CREDIENTIALS
      );
    }

    let updatePassword = await UserModel.findOne({
      email
    })

    let hashPass = await GeneratePassword(password, updatePassword.salt)

    updatePassword.password = hashPass;

    await updatePassword.save()

    return res.status(STATUS_CODE.OK).json({
      success: 1,
      message: "Password Succefully Updated"
    })

  } catch (error) {
    next(error)
  }
}

//<---------------------------forget password scenario End---------------------->



module.exports = {
  updatedPrfile,
  sendEmail,
  verifyOtp,
  changedPassword,
};
