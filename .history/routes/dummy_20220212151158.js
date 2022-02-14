const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ dummyPosts: { title: 'a post', description: 'random data u shuldnt see' } });
});

module.exports = router;
