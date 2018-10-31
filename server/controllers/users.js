const bcrypt = require('bcryptjs');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const createUser = async (req, res, next) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    })
    try {
        // Create a salted password
        const saltPassword = await bcrypt.genSalt(10);

        // Hash incoming password
        const hashPassword = await bcrypt.hash(newUser.password, saltPassword);

        newUser.password = hashPassword;
        const createUser = await newUser.save();
        res.status(200).send(createUser);
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // Find the User and check if they're valid
        const findUser = await User.findOne({ email })

        if (findUser.length > 1) {
            res.status(404).send({ message: 'User not found or authorized' })
        }

        // Compare password to hashed password
        const checkPassword = await bcrypt.compare(password, findUser.password)

        // Check if its correct, sign token if so
        if (checkPassword) {
            const payload = { id: findUser.id, email: findUser.email, password: findUser.password }
            const token = await jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 })
            res.status(200).json({ success: true, token: 'Bearer ' + token })
        } else {
            return res.status(404).json({ password: 'Password or email is incorrect' })
        }
    }
    catch (err) {
        res.status(404).send(err)
    }
}

module.exports = { createUser, loginUser }