# GitHub Repository Setup & Submission Guide

This guide explains how to create a GitHub repository and prepare your project for submission.

## Step 1: Create GitHub Repository

1. **Sign up/Log in to GitHub**
   - Go to https://github.com
   - Create account or log in

2. **Create New Repository**
   - Click "+" icon in top right
   - Select "New repository"
   - Repository name: `ecommerce-store` (or your preferred name)
   - Description: "Full-stack e-commerce application with React, Node.js, and MongoDB"
   - Visibility: **Public** (required for submission)
   - Check "Add a README file" (optional, we have one)
   - Click "Create repository"

## Step 2: Prepare Local Repository

1. **Initialize Git** (if not already done)
   ```bash
   cd resume
   git init
   ```

2. **Add Remote Origin**
   ```bash
   git remote add origin https://github.com/your-username/ecommerce-store.git
   ```

3. **Verify .gitignore**
   - Make sure `.gitignore` file exists in root directory
   - It should include:
     ```
     node_modules/
     .env
     .env.local
     .DS_Store
     *.log
     ```

4. **Add All Files**
   ```bash
   git add .
   ```

5. **Create Initial Commit**
   ```bash
   git commit -m "Initial commit: Full-stack e-commerce application"
   ```

6. **Push to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Step 3: Verify Repository

1. **Check GitHub**
   - Go to your repository URL: `https://github.com/your-username/ecommerce-store`
   - Verify all files are there
   - Check that .env files are NOT included (should be ignored)

2. **Update Repository Description**
   - Go to Settings > About
   - Add description and topics:
     - Topics: `react`, `nodejs`, `mongodb`, `ecommerce`, `express`

## Step 4: Deployment

### Deploy Backend (Render)

1. **Go to https://render.com**
2. **Sign up with GitHub**
3. **Create New Web Service**
   - Connect your GitHub repository
   - Set Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add Environment Variables:
     ```
     MONGODB_URI = your_mongodb_connection_string
     JWT_SECRET = your_secret_key
     ADMIN_USERNAME = admin
     ADMIN_PASSWORD = admin123
     ```
4. **Deploy** and note the URL (e.g., `https://ecommerce-backend.onrender.com`)

### Deploy Frontend (Vercel)

1. **Go to https://vercel.com**
2. **Sign up with GitHub**
3. **Import Project**
   - Connect your GitHub repository
   - Framework: React
   - Root Directory: `client`
   - Add Environment Variable:
     ```
     REACT_APP_API_URL = https://ecommerce-backend.onrender.com/api
     ```
4. **Deploy** and note the URL (e.g., `https://ecommerce-store.vercel.app`)

## Step 5: Update README with Live URLs

Edit your main `README.md` and add:

```markdown
## 🚀 Live Demo

- **Frontend**: https://your-app.vercel.app
- **Backend API**: https://your-backend.onrender.com/api
- **GitHub Repository**: https://github.com/your-username/ecommerce-store
```

Update the file and commit:

```bash
git add README.md
git commit -m "Add live demo URLs"
git push
```

## Step 6: Final Checklist

Before submitting, verify:

- ✅ GitHub repository is public
- ✅ README.md is complete and clear
- ✅ All source code is in repository
- ✅ .env files are in .gitignore (NOT in repository)
- ✅ Backend is deployed and running on Render
- ✅ Frontend is deployed and running on Vercel
- ✅ API endpoints are working
- ✅ Product listing is visible
- ✅ Search and filters work
- ✅ Shopping cart works
- ✅ Admin panel is accessible
- ✅ Admin can add/edit/delete products

## Submission Contents

Submit the following to your instructor:

1. **GitHub Repository Link**
   ```
   https://github.com/your-username/ecommerce-store
   ```

2. **Live Frontend URL**
   ```
   https://your-app.vercel.app
   ```

3. **Live Backend API URL**
   ```
   https://your-backend.onrender.com/api
   ```

## Testing the Deployment

### Test Frontend
```
Visit: https://your-app.vercel.app
- Browse products
- Search for items
- Try filters
- Add items to cart
- Go to admin panel and login
```

### Test Backend API
```
curl https://your-backend.onrender.com/api/products
curl https://your-backend.onrender.com/api/health
```

## Troubleshooting Deployment

### Backend won't start
- Check environment variables
- Verify MongoDB connection string
- Check Render logs for errors

### Frontend shows "Cannot reach backend"
- Verify REACT_APP_API_URL is correct
- Make sure backend is running
- Check browser console for CORS errors

### Products don't show
- Check if database has products
- Run seed script: `npm run seed`
- Check API endpoint: `/api/products`

## Optional Enhancements

After basic deployment, consider adding:

1. **Product Images**
   - Replace placeholder URLs with real images
   - Use services like Cloudinary

2. **Payment Integration**
   - Add Stripe or PayPal

3. **User Authentication**
   - Register and login for customers
   - Order history

4. **Reviews & Ratings**
   - Customer reviews
   - Product ratings

5. **Email Notifications**
   - Order confirmations
   - Stock alerts

## Support Resources

- [Render Deployment Docs](https://render.com/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)

---

**You're all set! Your e-commerce application is now live and ready for submission.** 🎉
