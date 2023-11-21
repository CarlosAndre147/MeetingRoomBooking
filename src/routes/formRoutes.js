// Routes for GUI
const express = require('express');
const router = express.Router();
const path = require('path');
const ClientsController = require('../controllers/clientsController');

// Send the 'index.html' file as the response
router.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
    res.sendFile(indexPath);
});

router.post('/', ClientsController.createClient);

module.exports = router;