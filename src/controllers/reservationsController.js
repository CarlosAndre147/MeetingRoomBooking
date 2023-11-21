// Importa o modelo da reserva
const Reservation = require('../models/reservationsModel');

// Controlador para lidar com as operações relacionadas às reservas
const ReservationController = {
  // Obtém todas as reservas
  getAllReservations: async (req, res) => {
    try {
      const reservations = await Reservation.findAll();
      res.status(200).json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Obtém uma reserva pelo ID
  getReservationById: async (req, res) => {
    try {
      const reservationId = req.params.id;
      const reservations = await Reservation.findByPk(reservationId);
      if (reservations == null) {
        res.status(404).json({message: 'Reserva não encontrada'});
      } else {
        res.status(200).json(reservations);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Cria uma nova reserva
  createReservation: async (req, res) => {
    try {
      const newReservation = req.body;
      const reservation = await Reservation.create(newReservation);
      res.status(200).json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Atualiza uma reserva existente
  updateReservation: async (req, res) => {
    try {
      const reservationId = req.params.id;
      const updatedReservation = req.body;
      await Reservation.update(updatedReservation, {where: {id: reservationId}});
      res.status(200).json({ message: 'Reserva atualizada com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

// Exporta o controlador para ser utilizado em outros módulos
module.exports = ReservationController;
