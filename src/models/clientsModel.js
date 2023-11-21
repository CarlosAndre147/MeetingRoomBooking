// Importing the database connection
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Client model
const Client = sequelize.define('clients', {
  // Unique identifier for each client
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  // Name of the client
  name: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  // Phone number of the client
  phone_number: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
});

// Export the Client model for use in other modules
module.exports = Client;
