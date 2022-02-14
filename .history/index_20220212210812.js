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
  let mostPopularMovies = `https://imdb-api.com/API/MostPopularMovies/${process.env.API_KEY}?start=0&_limit=10`;

  // API DOESNT SUPPORT LIMIT Looking for work around
  axios
    .get(mostPopularMovies)
    .then((fetchRes) => {
      res.send(fetchRes.data);
      // Let me know how that works
      // data not defined\
      // What about now?
      // that did in fact work
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
