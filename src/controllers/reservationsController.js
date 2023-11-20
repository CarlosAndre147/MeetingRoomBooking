// Importa o modelo da reserva
const Reservation = require('../models/reservationsModel');

// Controlador para lidar com as operações relacionadas às reservas
const ReservationController = {
  // Obtém todas as reservas
  getAllReservations: (req, res) => {
    Reservation.getAll((error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao obter as reservas.' });
        return;
      }
      res.status(200).json(results);
    });
  },

  // Obtém uma reserva pelo ID
  getReservationById: (req, res) => {
    const reservationId = req.params.id;
    Reservation.getById(reservationId, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao obter a reserva.' });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ message: 'reserva não encontrada.' });
        return;
      }

      res.status(200).json(results[0]);
    });
  },

  // Cria uma nova reserva
  createReservation: (req, res) => {
    const newReservation = req.body;
    Reservation.create(newReservation, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'erro ao criar reserva.' });
        return;
      }
      res.status(201).json({ message: 'reserva criada com sucesso.', reservationId: results.insertId });
    });
  },

  // Atualiza uma reserva existente
  updateReservation: (req, res) => {
    const reservationId = req.params.id;
    const updatedReservation = req.body;

    Reservation.update(reservationId, updatedReservation, (error) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao atualizar a reserva.' });
        return;
      }
      res.status(200).json({ message: 'reserva atualizada com sucesso.' });
    });
  },
};

// Exporta o controlador para ser utilizado em outros módulos
module.exports = ReservationController;
