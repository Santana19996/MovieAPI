const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://YoungHentai:<codeup12>@cluster0.9rmxh.mongodb.net/MoviePeep?retryWrites=true&w=majority',
  () => {
    console.log('Connected to MongoDB');
  }
);

// Import the routes

const authRoute = require('./routes/auth');

// Route Middlewares

app.use('/api/user', authRoute);

app.listen(3000, () => {
  console.log('Server is running');
});
