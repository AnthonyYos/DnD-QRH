const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './config/config.env' });
const DB_URI = process.env.DB_URI;

const connect = async () => {
  await mongoose.connect(
    'mongodb+srv://classydonut:K!ngDonut95@cluster0.ufg6t.mongodb.net/dnd?retryWrites=true&w=majority'
  );
  console.log('MongoDB connected.');
};

const close = () => {
  return mongoose.disconnect();
};

module.exports = {
  connect,
  close,
};
