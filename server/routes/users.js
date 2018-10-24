const express = require('express');
const router = express.Router();
const {
    createUser
} = require('../controllers/users');


router.post('/newuser', createUser);

module.exports = router;