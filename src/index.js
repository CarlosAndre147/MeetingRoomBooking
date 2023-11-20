const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Routes
const meetingRoomRoutes = require('./routes/meetingRoomRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
const reservationsRoutes = require('./routes/reservationsRoutes');

app.use('/meeting-rooms', meetingRoomRoutes);
app.use('/clients', clientsRoutes)
app.use('/reservations', reservationsRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
