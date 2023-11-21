// Importing the database connection
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
//Importing the foreign key models
const Client = require('../models/clientsModel');
const MeetingRoom = require('../models/meetingRoomModel');

// Define the Reservation model
const Reservation = sequelize.define('Reservation', {
  // Unique identifier for each reservation
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  // Date and time of the reservation
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // ID of the associated client
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'client_id', // Match the field name in the database
  },
  // ID of the associated meeting room
  meetingRoomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'meeting_room_id', // Match the field name in the database
  },
});

// Define foreign key associations
Reservation.belongsTo(Client, { foreignKey: 'clientId', as: 'client' });
Reservation.belongsTo(MeetingRoom, { foreignKey: 'meetingRoomId', as: 'meetingRoom' });

// Export the Reservation model for use in other modules
module.exports = Reservation;
