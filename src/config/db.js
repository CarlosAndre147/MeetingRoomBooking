// Import the 'mysql2' module
const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

// Load environment variables from the .env file
require('dotenv').config();

// Create a connection to the MySQL database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    // Disable timestamps globally
    timestamps: false,
  },
});

// Export the connection for use in other modules
module.exports = sequelize;
