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
    { title: "Apple iPhone 15 Pro", price: 999, image: "https://via.placeholder.com/200", category: "Mobiles" },
    { title: "Samsung Galaxy S24", price: 850, image: "https://via.placeholder.com/200", category: "Mobiles" },
    { title: "Sony Wireless Headphones", price: 200, image: "https://via.placeholder.com/200", category: "Audio" },
    { title: "HP Pavilion Laptop 16GB", price: 650, image: "https://via.placeholder.com/200", category: "Laptops" },
    { title: "Apple MacBook Air M2", price: 1100, image: "https://via.placeholder.com/200", category: "Laptops" }
  ];
  await Product.insertMany(sampleProducts);
  res.json({ message: "Database mein Sample Products Add Ho Gaye Hain!" });
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