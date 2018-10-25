const bcrypt = require('bcryptjs');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const createUser = (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    // Salt password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(user => res.json(user))
                .catch(err => res.json(err))
        })
    })
}

const loginUser = (req, res) => {
    const { email, password } = req.body;
    // Find a user
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'User email not found' });
            }
            // Check their password
            bcrypt.compare(password, user.password)
                .then(correct => {
                    if (correct) {
                        const payload = { id: user.id, email: user.email }
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 1800 }, (err, token) => {
                            res.json({ success: true, token: 'Bearer ' + token });
                        })
                    } else {
                        return res.status(400).json({ password: 'Password incorrect' })
                    }
                })
        })
}

module.exports = { createUser, loginUser }