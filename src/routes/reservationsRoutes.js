const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');

// Rota para obter todas as reservas
router.get('/', reservationsController.getAllReservations);

// Rota para obter uma reserva pelo ID
router.get('/:id', reservationsController.getReservationById);

// Rota para criar uma nova reserva
router.post('/', reservationsController.createReservation);

// Rota para atualizar uma reserva existente
router.put('/:id', reservationsController.updateReservation);

// Exporta as rotas para serem utilizadas em outros módulos
module.exports = router;
