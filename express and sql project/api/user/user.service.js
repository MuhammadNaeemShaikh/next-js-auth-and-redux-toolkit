const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        try {
            pool.query(
                'INSERT INTO users (first_name, last_name, gender, email, password, number,salt,role) VALUES (?, ?, ?, ?, ?, ?,?,?)',
                [
                    data.firstName,
                    data.lastName,
                    data.gender,
                    data.email,
                    data.password,
                    data.number,
                    data.salt,
                    data.role
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
    getUsers: () => {
        try {
            return new Promise((resolve, reject) => {
                pool.query(
                    `SELECT * from user`,
                    [],
                    (err, results, fields) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(results);
                        }
                    }
                );
            });

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
    getUserByEmail: async (id) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT * FROM users WHERE email = ?`,
                [id],
                (err, results, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            );
        });
    }
};


