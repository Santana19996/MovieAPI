var express = require('express');
var subdomain = require('express-subdomain');

var router = express.Router();

// GET method route
router.get('/id/:movie_id', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
// app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
// })

module.exports = router;
