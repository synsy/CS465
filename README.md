# CS465 – Travlr Getaways

Full-stack web application built using MongoDB, Express, Angular, and Node.js (MEAN stack).  
Includes a customer-facing site and a secured Angular SPA for administrative management.

---

## Features

- View available trips
- Add and update trips (protected routes)
- User registration and login
- JWT-based authentication
- RESTful API integration

---

## Tech Stack

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- Passport (Local Strategy)
- JSON Web Tokens (JWT)

### Frontend
- Angular (Standalone Components)
- Reactive Forms
- Bootstrap 5

---

## Running the Project

### Backend
```bash
npm install
npm start
```
Runs on: http://localhost:3000

### Angular Admin App
```bash
cd app_admin
npm install
ng serve
```
Runs on: http://localhost:4200

---

## API Endpoints

### Authentication
- `POST /api/register`
- `POST /api/login`

### Trips
- `GET /api/trips`
- `GET /api/trips/:tripCode`
- `POST /api/trips` (Protected)
- `PUT /api/trips/:tripCode` (Protected)

---

## Author

Christopher O'Dell  
CS-465 – Full Stack Development
