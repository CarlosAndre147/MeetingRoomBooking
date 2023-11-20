// Importa a conexão com o banco de dados
const db = require('../db');

// Define o modelo da reserva
const Reservation = {
  // Função para obter todas as reservas do banco de dados
  getAll: (callback) => {
    db.query('SELECT * FROM reservations', callback);
  },

  // Função para obter uma reserva pelo ID
  getById: (id, callback) => {
    db.query('SELECT * FROM reservations WHERE id = ?', [id], callback);
  },

  // Função para criar uma nova reserva
  create: (newReservation, callback) => {
    db.query('INSERT INTO reservations SET ?', newReservation, callback);
  },

  // Função para atualizar uma reserva existente
  update: (id, updatedReservation, callback) => {
    db.query('UPDATE reservations SET ? WHERE id = ?', [updatedReservation, id], callback);
  },
};

// Exporta o modelo da reserva para ser utilizado em outros módulos
module.exports = Reservation;
