// Importa o módulo 'mysql2'
const mysql = require('mysql2');

// Carrega as variáveis de ambiente a partir do arquivo .env
require('dotenv').config();

// Cria uma conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Conecta-se ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL.');
});

// Exporta a conexão para ser utilizada em outros módulos
module.exports = connection;
