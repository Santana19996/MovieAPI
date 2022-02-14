const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const axios = require('axios');

// Import the routes

const authRoute = require('./routes/auth');
const dummyRoute = require('./routes/dummy');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log('Connected to MongoDB')
);

// Middlewares
// Body Parser
app.use(express.json());

// Route Middlewares

// API DOESNT SUPPORT LIMIT Looking for work around

app.use('/api/user', authRoute);
app.use('/api/dummy', dummyRoute);
//  No
// app.get('/', this.fetchmovies);

app.listen(3000, () => {
  console.log('Server is running');
});
// Keep it up buddy > Sam
