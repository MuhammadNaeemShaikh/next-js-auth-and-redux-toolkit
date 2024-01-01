const dotenv = require('dotenv');
dotenv.config();
const { createPool } = require('mysql2');

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: '', // Leave this empty initially
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
});

const dbName = process.env.DB_DATABASE;

pool.getConnection((err, connection) => {
  if (err) {
    console.error(`Error connecting to MySQL: ${err.message}`);
    return;
  }

  // Create the database if it doesn't exist
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (createDbErr) => {
    if (createDbErr) {
      console.error(`Error creating database: ${createDbErr.message}`);
      //release connection
      connection.release();
      return;
    }

    console.log(`Database ${dbName} is ready or already exists`);

    // Select the database
    connection.changeUser({ database: dbName }, (changeUserErr) => {
      if (changeUserErr) {
        console.error(`Error selecting database: ${changeUserErr.message}`);
        //release connection
        connection.release();
        return;
      }

      console.log(`Selected database: ${dbName}`);

      // Create the user table if it does not exist
      connection.query(
        `CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          firstName VARCHAR(255),
          lastName VARCHAR(255),
          gender VARCHAR(10),
          email VARCHAR(255) UNIQUE,
          password VARCHAR(255) NOT NULL,
          number VARCHAR(20),
          salt VARCHAR(255) NOT NULL,
          role ENUM('USER', 'ADMIN') NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`,
        (createTableErr) => {
          if (createTableErr) {
            console.error(
              `Error creating user table: ${createTableErr.message}`
            );
          } else {
            console.log(`User table is ready or already exists`);
          }

          // Release the connection
          connection.release();
        }
      );

      //create product table if it does not exist

      connection.query(
        `CREATE TABLE IF NOT EXISTS products (
          id INT AUTO_INCREMENT PRIMARY KEY,
          product_name VARCHAR(255) NOT NULL,
          description TEXT,
          price DECIMAL(10, 2) NOT NULL,
          stock_quantity INT NOT NULL,
          category VARCHAR(50),
          brand VARCHAR(50),
          image_url VARCHAR(255),
          admin_id INT,
          FOREIGN KEY (admin_id) REFERENCES users(id),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`,
        (createTabErr) => {
          if (createTabErr) {
            console.log(`Error Creating Product Table`, createDbErr);
          } else {
            console.log(`product table is ready or already exist`);
          }
        }
      );
    });
  });
});

module.exports = pool;
