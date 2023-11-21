// Importing required modules
const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');

// Route to retrieve all reservations
router.get('/', reservationsController.getAllReservations);

// Route to retrieve a reservation by its ID
router.get('/:id', reservationsController.getReservationById);

// Route to create a new reservation
router.post('/', reservationsController.createReservation);

// Route to update an existing reservation
router.put('/:id', reservationsController.updateReservation);

// Exporting the routes for use in other modules
module.exports = router;
