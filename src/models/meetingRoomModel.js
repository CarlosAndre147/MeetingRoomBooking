// Importa a conexão com o banco de dados
const db = require('../db');

// Define o modelo da sala de reunião
const MeetingRoom = {
  // Função para obter todas as salas de reunião do banco de dados
  getAll: (callback) => {
    db.query('SELECT * FROM meeting_rooms', callback);
  },

  // Função para obter uma sala de reunião pelo ID
  getById: (id, callback) => {
    db.query('SELECT * FROM meeting_rooms WHERE id = ?', [id], callback);
  },

  // Função para criar uma nova sala de reunião
  create: (newMeetingRoom, callback) => {
    db.query('INSERT INTO meeting_rooms SET ?', newMeetingRoom, callback);
  },

  // Função para atualizar uma sala de reunião existente
  update: (id, updatedMeetingRoom, callback) => {
    db.query('UPDATE meeting_rooms SET ? WHERE id = ?', [updatedMeetingRoom, id], callback);
  },
};

// Exporta o modelo da sala de reunião para ser utilizado em outros módulos
module.exports = MeetingRoom;
