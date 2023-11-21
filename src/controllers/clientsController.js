// Import the Client model
const Clients = require('../models/clientsModel');

// Controller to handle operations related to clients.
const ClientsController = {
    // Get all clients
    getAllClients: async (req, res) => {
        try {
          const clients = await Clients.findAll();
          res.status(200).json(clients);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    // Get a client by ID
    getClientById: async (req, res) => {
        try {
          const clientId = req.params.id;
          const client = await Clients.findByPk(clientId);
          if (client == null) {
            res.status(404).json({ message: 'Client not found' });
          } else {
            res.status(200).json(client);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    // Create a new client
    createClient: async (req, res) => {
      try {
        const newClient = req.body;
        const client = await Clients.create(newClient);
        res.status(200).json(client);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    },
    // Update an existing client
    updateClient: async (req, res) => {
        try {
            const clientId = req.params.id;
            const updatedClient = req.body;
            await Clients.update(updatedClient, { where: { id: clientId } });
            res.status(200).json({ message: 'Client updated successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};
  
// Export the controller for use in other modules
module.exports = ClientsController;
