const router = require('express').Router();
const verify = require('../routes/verifyToken');

router.get('/', verify, (req, res) => {
  res.json({ dummyPosts: { title: 'a post', description: 'random data u shuldnt see' } });
});

module.exports = router;
