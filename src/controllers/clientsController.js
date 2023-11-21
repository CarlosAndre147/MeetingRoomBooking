// Importa o modelo do cliente
const Clients = require('../models/clientsModel');

// Controlador para lidar com as operações relacionadas aos clientes.
const ClientsController = {
    // Obtém todas os clientes
    getAllClients: async (req, res) => {
        try {
          const client = await Clients.findAll();
          res.status(200).json(client);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    // Obtém um cliente pelo ID
    getClientById: async (req, res) => {
        try {
          const clientId = req.params.id;
          const client = await Clients.findByPk(clientId);
          if (client == null) {
            res.status(404).json({message: 'Client not found'});
          } else {
            res.status(200).json(client);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    // Cria um novo Cliente
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

    // Atualiza um Cliente existente
    updateClient: async (req, res) => {
        try {
            const clientId = req.params.id;
            const updatedClient = req.body;
            await Clients.update(updatedClient, {where: {id: clientId}});
            res.status(200).json({ message: 'Cliente atualizado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};
  
  // Exporta o controlador para ser utilizado em outros módulos
  module.exports = ClientsController;
  