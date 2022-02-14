const express = require('express');
const userConfig = require('/Users/oscarsantana/MovieBox/controllers/userController.js');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;
