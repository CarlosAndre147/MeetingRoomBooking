# Meeting Room Booking System

This repository contains the source code for a Meeting Room Booking System implemented using Node.js, Express, and Sequelize ORM for MySQL.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database](#database)
- [Usage](#usage)
- [API Routes](#api-routes)
- [GUI for Interactive Registration](#gui-for-interactive-registration)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/CarlosAndre147/MeetingRoomBooking.git
    ```

2. **Install dependencies:**

    ```bash
    cd MeetingRoomBooking
    npm install
    ```

## Configuration

Create a `.env` file in the root directory with the following configuration:

```env
PORT=3000
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

## Database

This project uses Sequelize ORM with MySQL. Ensure you have a MySQL server running and update the `.env` file with your database configuration.

Initialize the database tables by running:

```bash
npm run db:migrate
```

## Usage

Start the application:

```bash
npm start
```

The server will be running at http://localhost:3000.

## API Routes

### Reservations

- **GET `/reservations`**: 
  - Get all reservations
  
- **GET `/reservations/:id`**: 
  - Get a reservation by ID
  
- **POST `/reservations`**: 
  - Create a new reservation
  
- **PUT `/reservations/:id`**: 
  - Update an existing reservation

### Meeting Rooms

- **GET `/meeting-rooms`**: 
  - Get all meeting rooms
  
- **GET `/meeting-rooms/:id`**: 
  - Get a meeting room by ID
  
- **POST `/meeting-rooms`**: 
  - Create a new meeting room
  
- **PUT `/meeting-rooms/:id`**: 
  - Update an existing meeting room

### Clients

- **GET `/clients`**: 
  - Get all clients
  
- **GET `/clients/:id`**: 
  - Get a client by ID
  
- **POST `/clients`**: 
  - Create a new client
  
- **PUT `/clients/:id`**: 
  - Update an existing client

## GUI for Interactive Registration

A simple GUI is available at the root path `/` for interactive registration of clients, meeting rooms, and reservations.

- **Access the GUI at [http://localhost:3000/](http://localhost:3000/)**
- The GUI provides forms for creating new entries:
  - **Client Registration**
  - **Meeting Room Registration**
  - **Reservation Registration**

**Note:** The GUI uses the same routes as the API to handle form submissions.

## License

This project is licensed under the MIT License.