const express = require('express');
const router = express.Router();
const ClientsController = require('../controllers/clientsController');

// Rota para obter todas os clientes
router.get('/', ClientsController.getAllClients);

// Rota para obter um cliente pelo ID
router.get('/:id', ClientsController.getClientById);

// Rota para criar um nova cliente
router.post('/', ClientsController.createClient);

// Rota para atualizar um cliente existente
router.put('/:id', ClientsController.updateClient);

// Exporta as rotas para serem utilizadas em outros módulos
module.exports = router;
