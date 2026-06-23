# Local Development Setup Guide

This guide walks you through setting up the e-commerce application on your local machine for development.

## Prerequisites

Before you start, make sure you have installed:

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **npm** (comes with Node.js)
3. **Git** - [Download](https://git-scm.com/)
4. **MongoDB Atlas Account** - [Create Free Account](https://www.mongodb.com/cloud/atlas)

## Step 1: Clone or Download the Repository

```bash
# If using Git
git clone <your-repository-url>
cd resume

# Or download as ZIP and extract
```

## Step 2: MongoDB Setup

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free
   - Create a new cluster
   - Wait for cluster to be created (5-10 minutes)

2. **Create Database User**
   - Go to Database Access
   - Click "Add New Database User"
   - Username: any username you want
   - Password: create a strong password
   - User Privileges: Atlas admin
   - Click "Add User"

3. **Get Connection String**
   - Go to Database
   - Click "Connect" button
   - Select "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your password
   - Replace `myFirstDatabase` with `ecommerce`
   - Example: `mongodb+srv://user:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority`

4. **Configure IP Whitelist**
   - Go to Network Access
   - Click "Add IP Address"
   - Add your current IP or click "Allow Access from Anywhere"
   - Click "Confirm"

## Step 3: Backend Setup

1. **Navigate to Server Directory**
   ```bash
   cd server
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create .env File**
   Create a file named `.env` in the server directory:
   ```
   MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
   JWT_SECRET=your-super-secret-key-change-this-in-production
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   PORT=5000
   ```

4. **Seed Sample Data** (Optional)
   ```bash
   npm run seed
   ```
   This adds 12 sample products to your database.

5. **Start Backend Server**
   ```bash
   npm run dev
   ```
   You should see: `Server is running on port 5000`

## Step 4: Frontend Setup

1. **Open New Terminal/Command Prompt**

2. **Navigate to Client Directory**
   ```bash
   cd client
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```
   (This may take 2-3 minutes)

4. **Create .env File**
   Create a file named `.env` in the client directory:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Start Frontend Server**
   ```bash
   npm start
   ```
   The app should open automatically in your browser at http://localhost:3000

## Step 5: Test the Application

### Homepage & Product Listing
- Go to http://localhost:3000
- You should see product listings
- Try searching for products
- Try filtering by category
- Try the price range slider

### Shopping Cart
- Click "Add to Cart" on any product
- Go to Cart page (click "🛒 Cart (X)" in header)
- Try updating quantities
- Try removing items
- Verify the total updates correctly

### Admin Panel
- Click "Admin" in the header
- You should see Admin Login page
- Use credentials:
  - Username: `admin`
  - Password: `admin123`
- Click "Login"
- You should see Admin Panel
- Try:
  - Adding a new product
  - Editing an existing product
  - Deleting a product
  - Check homepage to see changes reflected

### API Testing
- Open your browser and test endpoints:
  ```
  http://localhost:5000/api/health
  http://localhost:5000/api/products
  ```
- You should get JSON responses

## Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"
- **Solution**: Check your connection string in .env
- Make sure your IP is whitelisted on MongoDB Atlas
- Verify your password doesn't have special characters (or URL encode them)

### Issue: "Port 5000 already in use"
- **Solution**: Change PORT in .env to another port (e.g., 5001)
- Or kill the process using that port

### Issue: "npm install fails"
- **Solution**: Try clearing npm cache:
  ```bash
  npm cache clean --force
  npm install
  ```

### Issue: "Frontend won't load API data"
- **Solution**: 
  - Make sure backend server is running
  - Check REACT_APP_API_URL in frontend .env
  - Open browser console (F12) to see actual error

### Issue: "Admin login doesn't work"
- **Solution**:
  - Make sure backend is running
  - Check MongoDB is connected (look for message in console)
  - Try default credentials: admin / admin123

## Development Commands

### Backend
```bash
cd server

# Run with auto-reload on file changes
npm run dev

# Start production server
npm start

# Seed sample data
npm run seed
```

### Frontend
```bash
cd client

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Folder Structure

```
server/
├── models/
│   ├── Product.js      # Product schema
│   └── User.js         # User schema
├── routes/
│   ├── products.js     # Product API routes
│   └── auth.js         # Authentication routes
├── middleware/
│   └── auth.js         # JWT authentication
├── server.js           # Express app setup
├── seed.js             # Sample data seeding
├── package.json
└── .env                # Environment variables (create this)

client/
├── src/
│   ├── components/
│   │   ├── Header.js         # Navigation header
│   │   ├── ProductCard.js    # Product item component
│   │   ├── ProductList.js    # Product grid with filters
│   │   ├── ShoppingCart.js   # Cart page
│   │   ├── AdminPanel.js     # Product management
│   │   └── AdminLogin.js     # Admin login
│   ├── context/
│   │   └── CartContext.js    # Shopping cart state
│   ├── App.js                # Main app component
│   ├── index.js              # React entry point
│   └── index.css             # Global styles
├── public/
│   └── index.html            # HTML template
├── package.json
└── .env                      # Environment variables (create this)
```

## Next Steps

After confirming everything works locally:

1. **Prepare for Deployment**
   - Create GitHub repository
   - Push code to GitHub
   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions

2. **Customize the App**
   - Change company name/logo
   - Add more products
   - Customize colors in CSS files
   - Add more features

3. **Database Management**
   - Use MongoDB Atlas UI to manage products
   - Or use your admin panel
   - Monitor database usage

## Useful Resources

- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

## Support

If you encounter issues:
1. Check the console for error messages
2. Review the Common Issues section above
3. Check browser DevTools (F12) for network errors
4. Verify all environment variables are set correctly

Happy coding! 🚀
