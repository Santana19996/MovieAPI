const router = require('express').Router();
const User = require('.../models/User');

router.post('/register', (req, res) => {
  res.send('Register');
});

module.exports = router;
