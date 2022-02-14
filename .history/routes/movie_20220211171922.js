var express = require('express');

var router = express.Router();

// GET method route
router.route('/id');
get('/:movie_id', function (req, res) {
  res.send(req.params.movie_id + ' is the id of the movie.');
});

get('/');

// POST method route
// app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
// })

module.exports = router;
