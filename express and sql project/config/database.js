const dotenv = require('dotenv')
dotenv.config();
const { createPool } = require('mysql2');

const pool = createPool(
    {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionLimit: process.env.DB_CONNECTION_LIMIT
    }
)

module.exports = pool;

