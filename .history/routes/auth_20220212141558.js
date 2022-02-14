const router = require('express').Router();
const User = require('../model/User');
const { registerValidation } = require('./validation');

// Validation from JOI library

outer.post('/register', async (req, res) => {

    //Lets validate the data before we add a User
    let { error, value } = schema.validate(req.body);
    if (!error)
        error = "NaN";
    res.json({e: error , v: value});

});

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
