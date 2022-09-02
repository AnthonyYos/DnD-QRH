const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './config/config.env' });
const DB_URI = process.env.DB_URI;

try {
  mongoose.connect(DB_URI).then(console.log('MongoDB connected.'));
} catch (err) {
  console.error("MongoDB couldn't establish a connection.", err);
}
