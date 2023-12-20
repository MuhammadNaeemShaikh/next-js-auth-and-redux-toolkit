const pool = require('../../config/database');
const { GenerateSalt, GeneratePassword, validPassword, GenerateSignature } = require('../../utils');
const { create, getUsers, getUserById, getUserByEmail } = require('./user.service')


module.exports = {
    createUser: async (req, res) => {
        try {
            const body = req.body;
            const salt = await GenerateSalt();
            body.salt = salt;
            const password = await GeneratePassword(body.password, salt)
            body.password = password;
            body.role = 'USER'

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
            const users = await getUsers();
            res.status(200).json({
                success: 1,
                data: users
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

            const result = await getUserByEmail(email);

            if (result.length > 0) {

                const matchPassword = await validPassword(password, result[0].password, result[0].salt)

                if (matchPassword) {

                    const signature = await GenerateSignature({
                        _id: result[0].id,
                        email: result[0].email,
                        isAdmin: result[0].role
                    })

                    return res.status(200).json({
                        success: 1,
                        token: signature
                    })

                } else {
                    return res.status(200).json({
                        success: 0,
                        message: "Password Does Not Match"
                    });
                }
            } else {
                return res.status(400).json({
                    success: 0,
                    message: "User Doesn't Exist"
                });
            }
        } catch (error) {
            console.log(`Error in Login`, error);
            return res.status(500).json({
                success: 0,
                message: "Error in Db"
            });
        }
    }
}



