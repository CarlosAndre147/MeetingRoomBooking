// Importing required modules
const express = require('express');
const sequelize = require('./config/db');
const meetingRoomRoutes = require('./routes/meetingRoomRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
const reservationsRoutes = require('./routes/reservationsRoutes');
const formRoutes = require('./routes/formRoutes')

require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up routes for meeting rooms, clients, and reservations
app.use('/meeting-rooms', meetingRoomRoutes);
app.use('/clients', clientsRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/', formRoutes)

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Send the 'index.html' file as the response
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
    // Send the 'index.html' file as the response
    console.log(req.body);
});


// Synchronize the defined Sequelize models with the database
sequelize.sync().then(() => {
    console.log('Database synchronized successfully');
});

// Start the Express server on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
