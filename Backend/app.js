require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const errorHandler = require('./util/Errors/errorHandler');
const characters = require('./routes/characters');
const parties = require('./routes/parties');

const app = express();

app.use(
  morgan('dev', {
    skip: (req, res) => process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test',
  })
);
app.use(express.json());
app.use(cors());
app.use(mongoSanitize());
app.use('/api/v1/characters', characters);
app.use('/api/v1/parties', parties);
app.use(errorHandler);

module.exports = app;
