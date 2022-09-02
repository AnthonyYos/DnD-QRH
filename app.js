require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./util/Errors/errorHandler');
const playerRoutes = require('./routes/player');
const enemyRoutes = require('./routes/enemy');

module.exports = function (database) {
  const app = express();

  if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));
  app.use(express.json());
  app.use(cors());
  app.use('/api/v1/players', playerRoutes);
  app.use('/api/v1/enemies', enemyRoutes);
  app.use(errorHandler);

  return app;
};
