const express = require('express');
const sequelize = require('./config/db')
const meetingRoomRoutes = require('./routes/meetingRoomRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
const reservationsRoutes = require('./routes/reservationsRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

//Routes
app.use('/meeting-rooms', meetingRoomRoutes);
app.use('/clients', clientsRoutes)
app.use('/reservations', reservationsRoutes)

// Sync the models with the database
sequelize.sync().then(() => {
    console.log('Database synced');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
