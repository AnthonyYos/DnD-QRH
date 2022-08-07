require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./util/Errors/errorHandler');
const ExpressError = require('./util/Errors/ExpressError');
const { connectDB } = require('./config/database');
const playerRoutes = require('./routes/player');
const enemyRoutes = require('./routes/enemy');

const PORT = process.env.PORT || 5000;
connectDB();
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors());
app.use('/api/v1/players', playerRoutes);
app.use('/api/v1/enemies', enemyRoutes);

app.all('*', (req, res, next) => {
  next(new ExpressError('Resource Not Found', 404));
});

app.use(errorHandler);

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`));
