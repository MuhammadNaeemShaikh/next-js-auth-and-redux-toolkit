const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        try {
            pool.query(
                'INSERT INTO user (firstName, lastName, gender, email, password, number,salt) VALUES (?, ?, ?, ?, ?, ?,?)',
                [
                    data.firstName,
                    data.lastName,
                    data.gender,
                    data.email,
                    data.password,
                    data.number,
                    data.salt
                ],
                (error, results, fields) => {
                    if (error) {
                        return callback(error);
                    }
                    return callback(null, results);
                }
            );

        } catch (error) {
            console.log(error);
        }
    },
    getUsers: (callback) => {
        try {
            pool.query(
                `SELECT * from user`,
                [],
                (err, results, fields) => {
                    if (err) {
                        return callback(error);

                    }
                    return callback(null, results)
                }
            )

        } catch (error) {
            console.log(`Error in Getting User`, error);
        }
    },
    getUserById: (data, callback) => {
        try {

            pool.query(
                `SELECT * FROM user WHERE id = ?`,
                [data],
                (err, results, fields) => {
                    if (err) {
                        return callback(err)
                    }
                    return callback(null, results)
                }
            )

        } catch (error) {
            console.log("Error In Get User By Id", error);
        }
    },
    getUserByEmail: (id, callback) => {
        try {
            pool.query(
                `SELECT * FROM user WHERE email = ?`,
                [id],
                (err, results, fields) => {
                    if (err) {
                        return callback(err)
                    }
                    callback(null, results)
                }
            )
        } catch (error) {
            console.log(`Error in Getting user By Email`);
        }
    }
};


