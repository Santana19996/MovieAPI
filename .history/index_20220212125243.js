const express = require('express');
const app = express();

// Import the routes

const authRoute = require('../routes/auth');

app.listen(3000, () => {
  console.log('Server is running');
});
