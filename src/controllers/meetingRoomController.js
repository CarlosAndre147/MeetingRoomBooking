
// Importa o modelo da sala de reunião
const MeetingRoom = require('../models/meetingRoomModel');

// Controlador para lidar com as operações relacionadas às salas de reunião
const MeetingRoomController = {
  // Obtém todas as salas de reunião
  getAllMeetingRooms: (req, res) => {
    MeetingRoom.getAll((error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao obter as salas de reunião.' });
        return;
      }
      res.status(200).json(results);
    });
  },

  // Obtém uma sala de reunião pelo ID
  getMeetingRoomById: (req, res) => {
    const roomId = req.params.id;
    MeetingRoom.getById(roomId, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao obter a sala de reunião.' });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ message: 'Sala de reunião não encontrada.' });
        return;
      }

      res.status(200).json(results[0]);
    });
  },

  // Cria uma nova sala de reunião
  createMeetingRoom: (req, res) => {
    const newMeetingRoom = req.body;
    MeetingRoom.create(newMeetingRoom, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'erro ao criar sala de reunião.' });
        return;
      }
      res.status(201).json({ message: 'Sala de reunião criada com sucesso.', roomId: results.insertId });
    });
  },

  // Atualiza uma sala de reunião existente
  updateMeetingRoom: (req, res) => {
    const roomId = req.params.id;
    const updatedMeetingRoom = req.body;

    MeetingRoom.update(roomId, updatedMeetingRoom, (error) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao atualizar a sala de reunião.' });
        return;
      }
      res.status(200).json({ message: 'Sala de reunião atualizada com sucesso.' });
    });
  },
};

// Exporta o controlador para ser utilizado em outros módulos
module.exports = MeetingRoomController;
