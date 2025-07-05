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
- Responsive UI using basic CSS or Bootstrap (optional)

---

## 🧰 Tech Stack

- **Frontend**: React, Axios, JavaScript, CSS
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Dotenv, Nodemon
- **Database**: MongoDB (Local or Atlas)

---

## 📦 Project Structure

project-root/
├── backend/
│ ├── controllers/
│ │ └── productController.js
│ ├── models/
│ │ └── product.js
│ ├── routes/
│ │ └── productRoutes.js
│ ├── .env
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── ProductForm.js
│ │ │ └── ProductList.js
│ │ ├── App.js
│ │ └── index.js
│ ├── package.json
│ └── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/yourusername/fullstack-crud-app.git
cd fullstack-crud-app
🔧 Backend Setup (Node.js + MongoDB)
📁 2. Go to Backend Folder
bash
Copy
Edit
cd backend
📦 3. Install Dependencies
bash
Copy
Edit
npm install
⚙️ 4. Create .env File
ini
Copy
Edit
DB_URI=mongodb://127.0.0.1:27017/crud_app
PORT=4000
▶️ 5. Run the Backend Server
bash
Copy
Edit
npm run dev
Backend server will run at: http://localhost:4000

🎨 Frontend Setup (React)
📁 6. Go to Frontend Folder
bash
Copy
Edit
cd ../frontend
📦 7. Install Dependencies
bash
Copy
Edit
npm install
▶️ 8. Run the React App
bash
Copy
Edit
npm start
Frontend app will run at: http://localhost:3000

Make sure the backend server is also running.
