const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO registeration (firstName, lastName, gender, email, password, number)VALUES("Muhammad","Naeem","Male","naeem123@gmail.com","1234","123")`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number
            ]
        )
    }
}