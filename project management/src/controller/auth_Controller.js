const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/ErrorHandler');
const { UserModel } = require('../Model/index');
const { GenerateSalt, GeneratePassword, validPassword, GenerateSignature, } = require('../utils')
const { STATUS_CODE } = require('../utils/status_code')

const registerController = async (req, res, next) => {
    try {
        const { userName, age, gender, email, password, confirmPass } = req.body;

        // Check if email already exists in the database
        if (password !== confirmPass) {
            throw new ErrorHandler(
                'Password and confirm password are not same',
                STATUS_CODE.MISSING_OR_INCORRECT_CREDIENTIALS
            );
        }
        const existEmail = await UserModel.find({ email: email });
        if (existEmail.length === 0) {


            //generating salt
            const salt = await GenerateSalt();

            //hashing password
            const hashPass = await GeneratePassword(password, salt)


            //creating new user
            const savedUser = await UserModel.create({
                email,
                password: hashPass,
                salt,
                userName,
                age,
                gender
            });

            res.status(STATUS_CODE.OK).json({
                success: 1,
                message: "User Created",
            })

        } else if (existEmail.length > 0) {

            throw new ErrorHandler('This e-mail is already in use!', STATUS_CODE.USER_ALREADY_EXISTS);
        }
    } catch (err) {
        next(err);
    }
};



const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            // User not found or wrong password
            throw new ErrorHandler('Email Not Found', STATUS_CODE.NOT_FOUND);
        }

        //validate password
        const validatePassword = await validPassword(password, user.password, user.salt)


        if (validatePassword) {

            //generate jwt token

            const jwtToken = await GenerateSignature({
                _id: user._id,
                isAdmin: user.role
            })

            return res.status(STATUS_CODE.OK).json({
                success: 1,
                token: jwtToken
            })

        } else {
            throw new ErrorHandler(`Password Dosen't Match`, STATUS_CODE.MISSING_OR_INCORRECT_CREDIENTIALS);
        }
    } catch (error) {
        next(error);
    }
};


module.exports = {
    registerController,
    loginController,
};