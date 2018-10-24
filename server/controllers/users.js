const bcrypt = require('bcryptjs');
const User = require('../models/users')

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
        res.status(404).json({message:"Can't find route", error:err})
    }
}

module.exports = {createUser}