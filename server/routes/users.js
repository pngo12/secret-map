const express = require('express');
const router = express.Router();
const {
    createUser
} = require('../controllers/users');

const {isAuthenticated} = require('./../middleware/passport')


router.post('/newuser', isAuthenticated, createUser);

module.exports = router;