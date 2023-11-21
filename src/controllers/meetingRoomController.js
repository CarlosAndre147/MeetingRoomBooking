// Importa o modelo da sala de reunião
const MeetingRoom = require('../models/meetingRoomModel');

// Controlador para lidar com as operações relacionadas às salas de reunião
const MeetingRoomController = {
  // Obtém todas as salas de reunião
  getAllMeetingRooms: async (req, res) => {
    try {
      const meetingRooms = await MeetingRoom.findAll();
      res.status(200).json(meetingRooms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Obtém uma sala de reunião pelo ID
  getMeetingRoomById: async (req, res) => {
    try {
      const roomId = req.params.id;
      const meetingRoom = await MeetingRoom.findByPk(roomId);
      if (meetingRoom == null) {
        res.status(404).json({message: 'Meeting room not found'});
      } else {
        res.status(200).json(meetingRoom);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Cria uma nova sala de reunião
  createMeetingRoom: async (req, res) => {
    try {
      const newMeetingRoom = req.body;
      const meetingRoom = await MeetingRoom.create(newMeetingRoom);
      res.status(200).json(meetingRoom);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Atualiza uma sala de reunião existente
  updateMeetingRoom: async (req, res) => {
    try {
      const roomId = req.params.id;
      const updatedMeetingRoom = req.body;
      await MeetingRoom.update(updatedMeetingRoom, {where: {id: roomId}});
      res.status(200).json({ message: 'Sala de reunião atualizada com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

// Exporta o controlador para ser utilizado em outros módulos
module.exports = MeetingRoomController;
