const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './config/config.env' });
const DB_URI = process.env.DB_URI;

async function connectDB() {
  try {
    await mongoose.connect(DB_URI);
    console.log('MongoDB connected.');
  } catch (err) {
    console.error("MongoDB couldn't establish a connection.", err);
  }
}

module.exports = {
  connectDB,
};
