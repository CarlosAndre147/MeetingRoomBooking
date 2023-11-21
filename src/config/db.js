// Importa o módulo 'mysql2'
const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

// Carrega as variáveis de ambiente a partir do arquivo .env
require('dotenv').config();

// Cria uma conexão com o banco de dados MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    // Disable timestamps globally
    timestamps: false,
  },
});

// Exporta a conexão para ser utilizada em outros módulos
module.exports = sequelize;
