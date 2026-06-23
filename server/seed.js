require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const sampleProducts = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 129.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1512499617640-c2f9990151c0?auto=format&fit=crop&w=600&q=80',
    stock: 15
  },
  {
    name: 'Portable Power Bank',
    description: '20000mAh portable charger with fast charging support for all devices.',
    price: 39.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    stock: 25
  },
  {
    name: 'Premium Cotton T-Shirt',
    description: '100% organic cotton comfortable t-shirt perfect for everyday wear.',
    price: 24.99,
    category: 'Clothing',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    stock: 50
  },
  {
    name: 'Classic Denim Jeans',
    description: 'Stylish and durable denim jeans with a classic blue wash.',
    price: 59.99,
    category: 'Clothing',
    imageUrl: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80',
    stock: 30
  },
  {
    name: 'The Great Gatsby',
    description: 'Timeless classic novel by F. Scott Fitzgerald. A must-read masterpiece.',
    price: 14.99,
    category: 'Books',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    stock: 20
  },
  {
    name: 'JavaScript: The Good Parts',
    description: 'Learn JavaScript programming with this influential and comprehensive guide.',
    price: 19.99,
    category: 'Books',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    stock: 15
  },
  {
    name: 'Modern LED Desk Lamp',
    description: 'Energy-efficient LED desk lamp with adjustable brightness and color temperature.',
    price: 49.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=600&q=80',
    stock: 12
  },
  {
    name: 'Ceramic Coffee Mug Set',
    description: 'Set of 4 beautiful ceramic mugs perfect for coffee or tea.',
    price: 34.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
    stock: 18
  },
  {
    name: 'Professional Yoga Mat',
    description: 'Non-slip TPE yoga mat 6mm thick for comfortable and safe practice.',
    price: 44.99,
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80',
    stock: 22
  },
  {
    name: 'Stainless Steel Water Bottle',
    description: 'Eco-friendly 1-liter water bottle keeps drinks cold for 24 hours.',
    price: 29.99,
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=600&q=80',
    stock: 40
  },
  {
    name: 'Building Blocks Set',
    description: 'Educational toy set with 500 colorful building blocks for creative play.',
    price: 39.99,
    category: 'Toys',
    imageUrl: 'https://images.unsplash.com/photo-1523475496153-3d6cc896d37c?auto=format&fit=crop&w=600&q=80',
    stock: 16
  },
  {
    name: 'Remote Control Car',
    description: 'High-speed RC car with 2.4GHz wireless control and 30-minute battery.',
    price: 54.99,
    category: 'Toys',
    imageUrl: 'https://images.unsplash.com/photo-1529429617124-6d040d4f3809?auto=format&fit=crop&w=600&q=80',
    stock: 11
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log(`Successfully seeded ${sampleProducts.length} products`);

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
