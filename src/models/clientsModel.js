const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Client = sequelize.define('clients', {
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
  phone_number: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
});

// Exporta o modelo do cliente para ser utilizado em outros módulos
module.exports = Client;