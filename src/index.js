// Importing required modules
const express = require('express');
const sequelize = require('./config/db');
const meetingRoomRoutes = require('./routes/meetingRoomRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
const reservationsRoutes = require('./routes/reservationsRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Setting up routes for meeting rooms, clients, and reservations
app.use('/meeting-rooms', meetingRoomRoutes);
app.use('/clients', clientsRoutes);
app.use('/reservations', reservationsRoutes);

// Synchronize the defined Sequelize models with the database
sequelize.sync().then(() => {
    console.log('Database synchronized successfully');
});

// Start the Express server on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
