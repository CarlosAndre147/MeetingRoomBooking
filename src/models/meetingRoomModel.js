// Importa a conexão com o banco de dados
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define o modelo da sala de reunião
const MeetingRoom = sequelize.define('meeting_rooms', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  localization: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
});

// Exporta o modelo da sala de reunião para ser utilizado em outros módulos
module.exports = MeetingRoom;
