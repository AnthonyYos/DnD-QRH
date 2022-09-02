require('dotenv').config({ path: './config/config.env' });
const makeApp = require('./app');
const database = require('./config/database');

const app = makeApp(database);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`));
