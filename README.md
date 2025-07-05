# node-project
product management project using RestApi

# 🛠️ Full-Stack Product CRUD App (Node.js + React + MongoDB)

A complete **CRUD web application** built using **Node.js (Express)** for the backend and **React** for the frontend, with **MongoDB** as the database.

This project allows users to **create**, **view**, **update**, and **delete** product records through a responsive and user-friendly interface.

---

## 📁 Features

### 🔙 Backend (Node.js + Express)
- RESTful API for Products
- MongoDB integration via Mongoose
- Full CRUD operations
- Environment variables for DB and port
- Error handling and modular structure

### 🖥️ Frontend (React)
- Fetch and display product list
- Add new product
- Edit existing product
- Delete product
- Responsive UI using basic CSS 

---

## 🧰 Tech Stack

- **Frontend**: React, Axios, JavaScript, CSS
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Dotenv, Nodemon
- **Database**: MongoDB (Compass)

---

## 🔧 Backend Setup (Node.js + MongoDB)

### 📁 1. Go to Backend Folder

cd backend
📦 2. Install Dependencies
npm install

⚙️ 3. Create .env File
DB_URI=mongodb://127.0.0.1:27017/crud_app
PORT=4000

▶️ 4. Run the Backend Server

npm run dev

✅ Backend server will run at: http://localhost:4000

🎨 Frontend Setup (React)
📁 5. Go to Frontend Folder
cd ../frontend

📦 6. Install Dependencies
npm install

▶️ 7. Run the React App
npm start
