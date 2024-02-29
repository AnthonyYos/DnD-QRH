const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './config/config.env' });
const DB_URI = process.env.DB_URI;

const connect = async () => {
  await mongoose.connect(DB_URI);
  console.log('MongoDB connected.');
};

const close = () => {
  return mongoose.disconnect();
};

module.exports = {
  connect,
  close,
};
