# CS465 – Travlr Getaways

Full-stack web application built using MongoDB, Express, Angular, and Node.js (MEAN stack).  
The project includes a customer-facing site and a secured Angular Single Page Application (SPA) for administrative management.

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
- Express-rendered HTML (customer-facing pages)

---

# Architecture

This project uses two frontend approaches:

**Express + HTML (Server-Side Rendering):**  
The customer-facing portion renders HTML from the server. Each request loads a new page, which keeps the structure simple and traditional.

**Angular SPA:**  
The admin interface is built as a single-page application. Instead of reloading pages, Angular dynamically updates the content using components and API calls. This creates a faster, smoother user experience and better separation between frontend and backend.

**Why MongoDB?**  
MongoDB stores data in flexible JSON-like documents, which integrates naturally with JavaScript. This allows efficient data exchange between Node.js and Angular while supporting scalable schema design.

---

# Functionality

**JSON vs JavaScript:**  
JSON is a data format used to transfer information between frontend and backend. While it looks similar to JavaScript objects, it only stores data. In this project, the backend sends JSON responses, and Angular consumes that data to render the UI.

**Refactoring & Reusability:**  
During development, code was refactored to improve structure and efficiency. Trip display logic was moved into reusable Angular components, and API calls were centralized into services. Reusable UI components improve maintainability, reduce duplication, and make scaling the application easier.

---

# Testing

API endpoints were tested using Postman. Different HTTP methods were verified:

- **GET** for retrieving trips  
- **POST** for creating users and trips  
- **PUT** for updating trips  

JWT authentication added an additional testing layer, requiring valid tokens in the `Authorization: Bearer <token>` header. Common errors encountered included 400 (Bad Request), 401 (Unauthorized), and 404 (Not Found). Testing confirmed proper endpoint behavior and secure access control.

---

# Running the Project

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

# API Endpoints

### Authentication
- `POST /api/register`
- `POST /api/login`

### Trips
- `GET /api/trips`
- `GET /api/trips/:tripCode`
- `POST /api/trips` (Protected)
- `PUT /api/trips/:tripCode` (Protected)

---

# Reflection

This course strengthened my understanding of full-stack development by combining frontend frameworks, backend APIs, authentication, and database management into one integrated project. I developed practical experience with RESTful services, JWT security, Angular component architecture, and MongoDB data modeling. The project improved my debugging skills, architectural thinking, and ability to connect multiple technologies into a secure, working application. These skills make me a stronger and more marketable candidate in software development.

---

## Author

Christopher O'Dell  
CS-465 – Full Stack Development
