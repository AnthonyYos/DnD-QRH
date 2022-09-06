require('dotenv').config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const makeApp = require('./app');
const db = require('./db/database');

try {
  const app = makeApp(db);
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`);
  });
} catch (error) {
  console.log('Failed to start server.', error);
}
