// Importa o modelo do cliente
const Clients = require('../models/clientsModel');

// Controlador para lidar com as operações relacionadas aos clientes.
const ClientsController = {
    // Obtém todas as salas de reunião
    getAllClients: (req, res) => {
      Clients.getAll((error, results) => {
        if (error) {
          res.status(500).json({ error: 'Erro ao obter os clientes.' });
          return;
        }
        res.status(200).json(results);
      });
    },
  
    // Obtém um cliente pelo ID
    getClientById: (req, res) => {
      const clientId = req.params.id;
      Clients.getById(clientId, (error, results) => {
        if (error) {
          res.status(500).json({ error: 'Erro ao obter cliente.' });
          return;
        }
  
        if (results.length === 0) {
          res.status(404).json({ message: 'Cliente não encontrado.' });
          return;
        }
  
        res.status(200).json(results[0]);
      });
    },
  
    // Cria um novo Cliente
    createClient: (req, res) => {
      const newClient = req.body;
      Clients.create(newClient, (error, results) => {
        if (error) {
          res.status(500).json({ error: 'erro ao criar cliente.' });
          return;
        }
        res.status(201).json({ message: 'Cliente criado com sucesso.', clientId: results.insertId });
      });
    },
  
    // Atualiza um Cliente existente
    updateClient: (req, res) => {
      const clientId = req.params.id;
      const updatedClient = req.body;
  
      Clients.update(clientId, updatedClient, (error) => {
        if (error) {
          res.status(500).json({ error: 'Erro ao atualizar o Cliente.' });
          return;
        }
        res.status(200).json({ message: 'Cliente atualizado com sucesso.' });
      });
    },
  };
  
  // Exporta o controlador para ser utilizado em outros módulos
  module.exports = ClientsController;
  