// Importa a conexão com o banco de dados
const db = require('../db');

const Clients = {
// Função para obter todos os clientes do banco de dados
  getAll: (callback) => {
    db.query('SELECT * FROM clients', callback);
  },

  // Função para obter um cliente pelo ID
  getById: (id, callback) => {
    db.query('SELECT * FROM clients WHERE id = ?', [id], callback);
  },

  // Função para criar um novo cliente
  create: (newClient, callback) => {
    db.query('INSERT INTO clients SET ?', newClient, callback);
  },

  // Função para atualizar um cliente existente
  update: (id, updatedClient, callback) => {
    db.query('UPDATE clients SET ? WHERE id = ?', [updatedClient, id], callback);
  },
}

// Exporta o modelo do cliente para ser utilizado em outros módulos
module.exports = Clients;