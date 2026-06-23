<<<<<<< HEAD
# E-Commerce Product Store

A full-stack e-commerce application built with React, Node.js/Express, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Setup Guides](#setup-guides)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Tech Stack](#tech-stack)

## ✨ Features

- **Product Listing**: Browse products with dynamic search and filtering
- **Product Search & Filter**: Search by name, filter by category and price
- **Shopping Cart**: Add/remove items, update quantities, view total
- **Admin Panel**: Manage products (add, edit, delete) with authentication
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **MongoDB Integration**: Persistent data storage with Mongoose schemas

## Project Structure

```
ecommerce/
├── server/              # Backend (Express, MongoDB, Node.js)
│   ├── models/         # Mongoose schemas (Product, User)
│   ├── routes/         # API routes (products, auth)
│   ├── middleware/     # Authentication middleware
│   └── server.js       # Main server file
└── client/             # Frontend (React)
    ├── src/
    │   ├── components/ # React components
    │   ├── pages/      # Page components
    │   ├── context/    # React context (CartContext)
    │   ├── App.js      # Main App component
    │   └── index.js    # Entry point
    └── public/         # Static files
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (for cloud database)

## Installation

### Backend Setup

1. Navigate to server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with your configuration:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
   JWT_SECRET=your_secret_key
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

## API Endpoints

### Products
- `GET /api/products` - Get all products with search/filter
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - User registration

## Deployment

### Backend (Render)
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set environment variables
5. Deploy

### Frontend (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy automatically on push

## Default Admin Credentials

- Username: `admin`
- Password: `admin123`

## Features

✅ Product listing with search and filters
✅ Shopping cart management
✅ Admin panel for product management
✅ MongoDB with Mongoose schemas
✅ JWT authentication
✅ Responsive design
✅ Error handling

## Quick Start

1. **Clone the repository**
2. **Backend**: `cd server && npm install && npm run dev`
3. **Frontend**: `cd client && npm install && npm start`
4. Visit http://localhost:3000

## 📚 Setup Guides

- **[Local Development Setup](./SETUP.md)** - Detailed step-by-step guide for setting up locally
- **[Deployment Guide](./DEPLOYMENT.md)** - Instructions for deploying to Render (backend) and Vercel (frontend)
- **[GitHub Setup & Submission](./GITHUB.md)** - How to set up GitHub and submit your project
- **[Project Summary](./PROJECT_SUMMARY.md)** - Complete overview of what was built

## Project Structure

## Admin Panel Access

- URL: http://localhost:3000/admin
- Username: `admin`
- Password: `admin123`

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/ecommerce
JWT_SECRET=your_secret_key_change_this
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Live Demo

Once deployed:
- **Frontend**: https://your-app.vercel.app
- **Backend API**: https://your-backend.onrender.com/api

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Tech Stack

### Frontend
- React 18
- React Router v6
- Axios for API calls
- CSS3 with Grid and Flexbox

### Backend
- Express.js
- Node.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- CORS for cross-origin requests

### Database
- MongoDB Atlas (cloud)

### Deployment
- Vercel (Frontend)
- Render (Backend)

## Features Implemented

✅ Complete product listing
✅ Real-time search functionality
✅ Multi-category filtering
✅ Price range filtering
✅ Shopping cart with localStorage persistence
✅ Admin login with JWT authentication
✅ Full CRUD operations for products
✅ Product validation
✅ Error handling
✅ Responsive design
✅ Professional UI/UX
✅ Environment variable configuration

## API Documentation

### Get All Products
```
GET /api/products?search=name&category=Electronics&minPrice=0&maxPrice=1000
```

### Get Single Product
```
GET /api/products/:id
```

### Create Product (Admin)
```
POST /api/products
Authorization: Bearer <token>
{
  "name": "Product Name",
  "description": "Description",
  "price": 99.99,
  "category": "Electronics",
  "imageUrl": "https://...",
  "stock": 10
}
```

### Update Product (Admin)
```
PUT /api/products/:id
Authorization: Bearer <token>
```

### Delete Product (Admin)
```
DELETE /api/products/:id
Authorization: Bearer <token>
```

### Login
```
POST /api/auth/login
{
  "username": "admin",
  "password": "admin123"
}
```

## Support

For issues or questions, please create a GitHub issue.

## License

ISC
