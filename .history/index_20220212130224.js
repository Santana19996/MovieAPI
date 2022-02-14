const express = require('express');
const app = express();
const mongo = require('mongoose');

// Import the routes

const authRoute = require('./routes/auth');

// Route Middlewares

app.use('/api/user', authRoute);

app.listen(3000, () => {
  console.log('Server is running');
});
