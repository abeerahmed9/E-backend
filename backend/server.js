const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch(err => console.log('❌ DB Error:', err));

// Product Schema (Database Rules)
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  category: String
});
const Product = mongoose.model('Product', productSchema);

// 1. Seed Route: Pehli baar database mein sample products bharne ke liye
app.get('/api/seed', async (req, res) => {
  await Product.deleteMany({});
  const sampleProducts = [
    { title: "Apple iPhone 15 Pro", price: 999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80", category: "Mobiles" },
    { title: "Samsung Galaxy S24", price: 850, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80", category: "Mobiles" },
    { title: "Sony Wireless Headphones", price: 200, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80", category: "Audio" },
    { title: "HP Pavilion Laptop", price: 650, image: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=300&q=80", category: "Laptops" },
    { title: "Apple MacBook Air M2", price: 1100, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80", category: "Laptops" },
    { title: "Smart Gaming Watch", price: 150, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80", category: "Watches" }
  ];
  await Product.insertMany(sampleProducts);
  res.json({ message: "Database mein Real Products Add Ho Gaye Hain!" });
});

// 2. Fetch & Search Route: Database se search aur fetch karne ke liye
app.get('/api/products', async (req, res) => {
  try {
    const { q } = req.query;
    let query = {};
    if (q) {
      // Direct Search query in MongoDB (Case-insensitive)
      query.title = { $regex: q, $options: 'i' };
    }
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));