const express = require('express');
const router = express.Router();
const MeetingRoomController = require('../controllers/meetingRoomController');

// Rota para obter todas as salas de reunião
router.get('/', MeetingRoomController.getAllMeetingRooms);

// Rota para obter uma sala de reunião pelo ID
router.get('/:id', MeetingRoomController.getMeetingRoomById);

// Rota para criar uma nova sala de reunião
router.post('/', MeetingRoomController.createMeetingRoom);

// Rota para atualizar uma sala de reunião existente
router.put('/:id', MeetingRoomController.updateMeetingRoom);

// Exporta as rotas para serem utilizadas em outros módulos
module.exports = router;
