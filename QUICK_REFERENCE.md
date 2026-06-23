# Quick Reference Guide

## 🚀 Getting Started

### 1. Local Setup (5 minutes)
```bash
# Backend
cd server
npm install
# Create .env file with MongoDB URI
npm run seed
npm run dev

# Frontend (new terminal)
cd client
npm install
# Create .env file with API URL
npm start
```

Visit: http://localhost:3000

### 2. Test Locally
- Browse products ✓
- Search and filter ✓
- Add to cart ✓
- Go to /admin ✓
- Login: admin / admin123 ✓
- Add/edit/delete products ✓

### 3. Deploy to Production
```bash
# Create GitHub repository
git init
git add .
git commit -m "Initial commit"
git push origin main

# Deploy backend to Render
# Deploy frontend to Vercel
# Update REACT_APP_API_URL in Vercel

# Test live URLs
```

## 📋 MongoDB Connection String

Template:
```
mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/ecommerce?retryWrites=true&w=majority
```

Example:
```
mongodb+srv://john:password123@mydb123.mongodb.net/ecommerce?retryWrites=true&w=majority
```

## 🔐 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=my-secret-key-12345
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

After deployment:
```
REACT_APP_API_URL=https://your-backend.onrender.com/api
```

## 🎯 Key Endpoints

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| GET | /api/products | No | Get all products |
| GET | /api/products/:id | No | Get single product |
| POST | /api/products | Yes | Create product |
| PUT | /api/products/:id | Yes | Update product |
| DELETE | /api/products/:id | Yes | Delete product |
| POST | /api/auth/login | No | Admin login |
| GET | /api/health | No | Health check |

## 📊 Testing Checklist

- [ ] Products load on homepage
- [ ] Search returns correct results
- [ ] Category filter works
- [ ] Price filter works
- [ ] Add to cart works
- [ ] Cart shows correct total
- [ ] Cart persists after refresh
- [ ] Admin login works
- [ ] Can add product
- [ ] Can edit product
- [ ] Can delete product
- [ ] Changes appear immediately
- [ ] Responsive on mobile
- [ ] No console errors

## 🔗 Useful Links

### Development
- Local Frontend: http://localhost:3000
- Local Backend: http://localhost:5000
- Local API: http://localhost:5000/api

### Production
- Render: https://render.com
- Vercel: https://vercel.com
- MongoDB: https://mongodb.com/cloud/atlas
- GitHub: https://github.com

## 🐛 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| API 404 | Check REACT_APP_API_URL |
| Products won't load | Check MongoDB connection |
| Admin login fails | Verify env variables |
| Port already in use | Change PORT in .env |
| CORS errors | Check backend CORS config |

## 📱 Components Reference

### Frontend Components
- `Header.js` - Navigation menu
- `ProductList.js` - Product grid with filters
- `ProductCard.js` - Individual product item
- `ShoppingCart.js` - Cart page
- `AdminPanel.js` - Admin dashboard
- `AdminLogin.js` - Admin login page

### Backend Routes
- `/api/products` - Product operations
- `/api/auth` - Authentication operations

## 💾 Database Models

### Product
- name (String)
- description (String)
- price (Number)
- category (String)
- imageUrl (String)
- stock (Number)
- rating (Number)

### User
- username (String)
- password (String - hashed)
- isAdmin (Boolean)

## 🎨 Styling

Main colors:
- Primary: #667eea (purple)
- Secondary: #764ba2 (dark purple)
- Success: #27ae60 (green)
- Danger: #e74c3c (red)
- Background: #f5f5f5 (light gray)

## 📦 Dependencies Summary

### Backend
- express
- mongoose
- cors
- dotenv
- bcryptjs
- jsonwebtoken
- nodemon (dev)

### Frontend
- react
- react-router-dom
- axios
- react-scripts

## 🚢 Deployment Checklist

- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set
- [ ] Database connected
- [ ] CORS configured
- [ ] API endpoints working
- [ ] Live URLs documented
- [ ] GitHub repo is public
- [ ] README includes live URLs

## 📞 Support

Stuck? Check these files:
- Problems? → SETUP.md
- Deploying? → DEPLOYMENT.md
- GitHub? → GITHUB.md
- Overview? → PROJECT_SUMMARY.md

## ⚡ Speed Tips

- Use npm ci instead of npm install for faster installs
- Run npm run seed to populate database quickly
- Test API with curl before frontend changes
- Monitor Render and Vercel logs for errors

## 🔄 Typical Workflow

1. Code changes locally
2. Test in development
3. Commit to GitHub
4. Render auto-deploys backend
5. Vercel auto-deploys frontend
6. Test live URLs
7. Done!

---

**Remember**: Keep `.env` files safe and never commit them to git!

Good luck! 🎉
