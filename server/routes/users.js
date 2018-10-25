const express = require('express');
const router = express.Router();
const {
    createUser,
    loginUser,
} = require('../controllers/users');
const passport = require('passport');

router.post('/newuser', passport.authenticate('jwt', { session: false }), createUser);
router.post('/login', loginUser);

module.exports = router;