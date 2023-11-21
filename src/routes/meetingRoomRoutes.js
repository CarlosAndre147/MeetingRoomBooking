// Importing required modules
const express = require('express');
const router = express.Router();
const MeetingRoomController = require('../controllers/meetingRoomController');

// Route to retrieve all meeting rooms
router.get('/', MeetingRoomController.getAllMeetingRooms);

// Route to retrieve a meeting room by its ID
router.get('/:id', MeetingRoomController.getMeetingRoomById);

// Route to create a new meeting room
router.post('/', MeetingRoomController.createMeetingRoom);

// Route to update an existing meeting room
router.put('/:id', MeetingRoomController.updateMeetingRoom);

// Exporting the routes for use in other modules
module.exports = router;
