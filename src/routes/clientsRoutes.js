// Importing required modules
const express = require('express');
const router = express.Router();
const ClientsController = require('../controllers/clientsController');

// Route to retrieve all clients
router.get('/', ClientsController.getAllClients);

// Route to retrieve a client by its ID
router.get('/:id', ClientsController.getClientById);

// Route to create a new client
router.post('/', ClientsController.createClient);

// Route to update an existing client
router.put('/:id', ClientsController.updateClient);

// Exporting the routes for use in other modules
module.exports = router;
