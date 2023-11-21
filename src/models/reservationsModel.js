const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Client = require('../models/clientsModel');
const MeetingRoom = require('../models/meetingRoomModel');

const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'client_id', // Match the field name in the database
  },
  meetingRoomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'meeting_room_id', // Match the field name in the database
  },
});

// Define foreign key associations
Reservation.belongsTo(Client, { foreignKey: 'clientId', as: 'client' });
Reservation.belongsTo(MeetingRoom, { foreignKey: 'meetingRoomId', as: 'meetingRoom' });

// Exporta o modelo da reserva para ser utilizado em outros módulos
module.exports = Reservation;
