# Techou 🚀

Techou is an AI-powered note-taking and productivity web application built using the MERN stack. It helps users create, organize, summarize, and collaborate on notes while leveraging Google's Gemini AI for intelligent features.

## Features

### Authentication

* User Registration
* User Login
* Secure Password Hashing with bcryptjs
* JWT-based Authentication

### Notes Management

* Create Notes
* Read Notes
* Update Notes
* Delete Notes
* User-specific Notes Storage

### AI Features

* AI-Powered Note Summarization
* Auto-Generated Quizzes from Notes
* Google Gemini API Integration

### Collaboration

* Share Notes with Other Users
* Collaborative Access Management
* Shared Notes Dashboard

---

## Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (jsonwebtoken)
* bcryptjs

### AI

* Google Gemini API (`@google/genai`)

---

## Project Structure

```text
techou/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   │
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd techou
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/techou
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_api_key
```

Run Backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Learning Goals

This project is being built to strengthen skills in:

* Full-Stack MERN Development
* REST API Design
* Authentication & Authorization
* MongoDB Data Modeling
* AI Integration
* Real-Time Collaboration Features
* Deployment & Production Workflows

---

## Current Development Status

* [x] Project Setup
* [x] MongoDB Connection
* [x] User Schema
* [x] Note Schema
* [ ] Authentication APIs
* [ ] Notes CRUD APIs
* [ ] Gemini AI Integration
* [ ] Collaboration Features
* [ ] Deployment

---

## Author

Parv Arora

Built as a portfolio project to explore AI-powered productivity tools using the MERN stack.
