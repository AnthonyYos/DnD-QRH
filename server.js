require('dotenv').config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const makeApp = require('./app');
const db = require('./db/database');
const app = makeApp();

db.connect()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`);
    });
  })
  .catch(err => {
    console.log('Failed to start the server.\n', err);
  });
