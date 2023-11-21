// Import the Reservation model
const Reservation = require('../models/reservationsModel');

// Controller to handle operations related to reservations
const ReservationController = {
  // Get all reservations
  getAllReservations: async (req, res) => {
    try {
      const reservations = await Reservation.findAll();
      res.status(200).json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Get a reservation by ID
  getReservationById: async (req, res) => {
    try {
      const reservationId = req.params.id;
      const reservation = await Reservation.findByPk(reservationId);
      if (reservation == null) {
        res.status(404).json({ message: 'Reservation not found' });
      } else {
        res.status(200).json(reservation);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Create a new reservation
  createReservation: async (req, res) => {
    try {
      const newReservation = req.body;
      console.log(newReservation);
      const reservation = await Reservation.create(newReservation);
      res.status(200).json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Update an existing reservation
  updateReservation: async (req, res) => {
    try {
      const reservationId = req.params.id;
      const updatedReservation = req.body;
      await Reservation.update(updatedReservation, { where: { id: reservationId } });
      res.status(200).json({ message: 'Reservation updated successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

// Export the controller for use in other modules
module.exports = ReservationController;
