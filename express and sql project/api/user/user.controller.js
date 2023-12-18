const pool = require('../../config/database');
const { GenerateSalt, GeneratePassword } = require('../../utils');
const { create, getUsers, getUserById, getUserByEmail } = require('./user.service')


module.exports = {
    createUser: async (req, res) => {
        try {
            const body = req.body;
            const salt = await GenerateSalt();
            body.salt = salt;
            const password = await GeneratePassword(body.password, salt)
            body.password = password;

            create(body, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: "Database Connection Error"
                    })
                }

                return res.status(200).json({
                    success: 1,
                    data: result
                })
            })

        } catch (error) {
            console.log(`error in user Creating at user controller`, error);
        }

    },
    getUsers: async (req, res) => {
        try {
            getUsers((err, result) => {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: "Database Connection Error"
                    })
                }
                return res.status(200).json({
                    success: 1,
                    data: result
                })
            })
        } catch (error) {
            console.log(`Error in Getting Users`, error);
        }
    },
    getUserUsingId: async (req, res) => {
        try {
            const { id } = req.params;
            getUserById(id, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        success: 0,
                        message: "Error In Db",
                    })
                }
                return res.status(200).json({
                    success: 1,
                    data: result
                })
            })

        } catch (error) {
            console.log(`Error In Getting User By Id`, error);
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            getUserByEmail(email, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: "Error in Db"
                    })
                }
                if (result.length > 1) {
                    return res.status(200).json({
                        success: 1,
                        data: result
                    })
                }
                else {

                }
            })
        } catch (error) {
            console.log(`Error in Login`);
        }
    }
}



