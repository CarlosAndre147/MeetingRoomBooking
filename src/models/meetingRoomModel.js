// Importing the database connection
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the MeetingRoom model
const MeetingRoom = sequelize.define('meeting_rooms', {
  // Unique identifier for each meeting room
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  // Name of the meeting room
  name: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  // Maximum capacity of the meeting room
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Localization information for the meeting room
  localization: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
});

// Export the MeetingRoom model for use in other modules
module.exports = MeetingRoom;
