require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const errorHandler = require('./util/Errors/errorHandler');
const characters = require('./routes/characters');

module.exports = function () {
  const app = express();

  if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));
  app.use(express.json());
  app.use(cors());
  app.use(mongoSanitize());
  app.use('/api/v1/characters', characters);
  app.use(errorHandler);

  return app;
};
