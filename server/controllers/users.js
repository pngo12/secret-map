const bcrypt = require('bcryptjs');
const User = require('../models/users')
const jwt = require('jsonwebtoken')
const passport = require('passport')
// const keys = require('./../config/keys')

const createUser = async (req, res) => {
    try {
        const newUser = await User({
            email: req.body.email,
            password: req.body.password
        })
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err
                newUser.password = hash;
                newUser.save()
                newUser => res.json(newUser)
            })
        })
    }
    catch (err) {
        res.status(404).json({ message: "Can't find route", error: err })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let findUser = await User.findOne({ email })
        if (!findUser) {
            return res.status(404).send({ message: 'User not found' })
        }
        let authPassword = await bcrypt.compare(password, user.password)
        if (authPassword) {
            const payload = {email: user.email}
            jwt.sign(
                payload,
                // app.get('secretKey'),
                keys.secretKey,
                {expiresIn: 3000},
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    })
                }
            )
        } 
    }
    catch(err){
        res.status(404).send({message: 'Sorry something went wrong'})
    }
}

module.exports = { createUser }