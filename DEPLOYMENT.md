## Deployment Guide

### Backend Deployment (Render)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub account

2. **Deploy Backend**
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository
   - Select the server directory as root
   - Build command: `npm install`
   - Start command: `npm start`
   - Add environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A secure secret key
     - `ADMIN_USERNAME`: admin
     - `ADMIN_PASSWORD`: admin123
     - `PORT`: 5000

3. **Get Backend URL**
   - Render will provide a URL like: `https://your-app.onrender.com`
   - Update frontend's `REACT_APP_API_URL` with this URL

### Frontend Deployment (Vercel)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub account

2. **Deploy Frontend**
   - Click "New Project"
   - Import your GitHub repository
   - Framework preset: React
   - Root directory: client
   - Environment variables:
     - `REACT_APP_API_URL`: https://your-backend.onrender.com/api
   - Click Deploy

3. **Get Frontend URL**
   - Vercel will provide a URL like: `https://your-app.vercel.app`
   - This is your live frontend URL

### MongoDB Setup

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create a free cluster
   - Create a database user
   - Get connection string

2. **Connection String Format**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
   ```

### Testing Deployment

1. Test backend API:
   ```
   curl https://your-backend.onrender.com/api/health
   ```

2. Test product endpoint:
   ```
   curl https://your-backend.onrender.com/api/products
   ```

3. Visit frontend URL in browser:
   ```
   https://your-frontend.vercel.app
   ```

### Troubleshooting

- **CORS errors**: Make sure backend has CORS enabled
- **Database connection**: Verify MongoDB URI in .env
- **API not responding**: Check Render logs for errors
- **Frontend won't load**: Check Vercel environment variables

### Important Notes

- Keep `.env` files out of git (use `.gitignore`)
- Use environment variables for sensitive data
- Test locally before deploying
- Monitor logs on Render and Vercel dashboards
