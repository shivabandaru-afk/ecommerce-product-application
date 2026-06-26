# E-Commerce Product Application (MERN Stack)

A full-stack e-commerce web application built using the MERN stack that allows users to browse, search, and filter products, manage a shopping cart, and enables admins to perform secure product management with role-based authentication.

---

##  Live Demo
https://your-deployed-link.vercel.app

---

##  Features

###  User Features
- User registration and login system
- Browse all products in a responsive UI
- View detailed product pages
- Search products by name
- Filter products by category and price
- Add/remove products from shopping cart

###  Admin Features
- Secure JWT-based authentication
- Role-based access control (Admin/User)
- Add new products
- Update existing products
- Delete products
- Manage product catalog

---

##  Tech Stack

**Frontend:**
- React.js
- HTML5
- CSS3
- JavaScript (ES6+)

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB Atlas

**Authentication:**
- JSON Web Token (JWT)
- bcrypt (if used)

**Tools & Deployment:**
- Git & GitHub
- Vercel (Frontend deployment)
- Render / Railway (Backend deployment if used)

---

## 📁 Project Structure
E-Commerce-Product-Application/
│
├── client/ # React frontend
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── App.js
│
├── server/ # Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ └── server.js
│
├── .env
├── package.json
└── README.md

---

##  Authentication Flow

1. User registers or logs in
2. Server validates credentials
3. JWT token is generated
4. Token is stored and used for protected routes
5. Admin-only routes are restricted using role-based middleware

---

##  API Endpoints

### Auth
- POST `/api/auth/register` → Register user  
- POST `/api/auth/login` → Login user  

### Products
- GET `/api/products` → Get all products  
- POST `/api/products` → Create product (Admin)  
- PUT `/api/products/:id` → Update product (Admin)  
- DELETE `/api/products/:id` → Delete product (Admin)  
- GET `/api/products/:id` → Get single product  
- GET `/api/products/search?q=` → Search products  

### Cart
- POST `/api/cart` → Add item to cart  
- DELETE `/api/cart/:id` → Remove item  

---

##  Installation & Setup

### 1️ Clone the repository
```bash
git clone https://github.com/hemanth-chukka/ecommerce-product-application.git
```

### 2️ Install dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd client
npm install
```

---

### 3️ Environment Variables

Create a `.env` file in the server folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

### 4️ Run the application

#### Start backend
```bash
cd server
npm start
```

#### Start frontend
```bash
cd client
npm start
```

---

## Future Improvements
- Payment gateway integration (Razorpay / Stripe)
- Wishlist feature
- Order history tracking
- Pagination for products
- Product reviews & ratings
- Image upload for products

---

##  Author

**Hemanth Kumar Chukka**

- GitHub: https://github.com/hemanth-chukka  
- LinkedIn: www.linkedin.com/in/hemanth-chukka-a0664137a  
- Email: hemuchukka147@gmail.com  

---
