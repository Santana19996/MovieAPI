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

app.get('/', (req, res) => {
  let searchMovieUrl = `https://imdb-api.com/API/Search/${process.env.API_KEY}/lost%202004`;

  axios
    .get(searchMovieUrl)
    .then((fetchRes) => {
      res.send(fetchRes);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use('/api/user', authRoute);
app.use('/api/dummy', dummyRoute);

app.listen(3000, () => {
  console.log('Server is running');
});
// Keep it up buddy > Sam
