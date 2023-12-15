const { createPool } = require('mysql');

const pool = createPool(
    {
        port: process.env.DB_PORT,
        DB_HOST: "localhost",
        user: "root",
        password: 12345,
        database: 'user',
        connectionLimit: 10
    }
)

module.exports = pool;