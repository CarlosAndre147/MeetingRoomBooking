// Import the MeetingRoom model
const MeetingRoom = require('../models/meetingRoomModel');

// Controller to handle operations related to meeting rooms
const MeetingRoomController = {
  // Get all meeting rooms
  getAllMeetingRooms: async (req, res) => {
    try {
      const meetingRooms = await MeetingRoom.findAll();
      res.status(200).json(meetingRooms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Get a meeting room by ID
  getMeetingRoomById: async (req, res) => {
    try {
      const roomId = req.params.id;
      const meetingRoom = await MeetingRoom.findByPk(roomId);
      if (meetingRoom == null) {
        res.status(404).json({ message: 'Meeting room not found' });
      } else {
        res.status(200).json(meetingRoom);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Create a new meeting room
  createMeetingRoom: async (req, res) => {
    try {
      const newMeetingRoom = req.body;
      const meetingRoom = await MeetingRoom.create(newMeetingRoom);
      res.status(200).json(meetingRoom);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Update an existing meeting room
  updateMeetingRoom: async (req, res) => {
    try {
      const roomId = req.params.id;
      const updatedMeetingRoom = req.body;
      await MeetingRoom.update(updatedMeetingRoom, { where: { id: roomId } });
      res.status(200).json({ message: 'Meeting room updated successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

// Export the controller for use in other modules
module.exports = MeetingRoomController;
