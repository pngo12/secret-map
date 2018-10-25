const passport = require ('passport');
const BasicStrategy = require('passport-http').BasicStrategy
const User = require ('../models/users')

passport.use(new BasicStrategy(
    function(username, password, next) {
        User.findOne({ username }, function(err,user) {
            if(err) return next(err, false);
            if(!user || !user.verifyPassword(password)) return next(null, false)
            return next(null,user)
        })
    }
))

exports.isAuthenticated = passport.authenticate('basic', {session: false})


// const jwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const mongoose = require('mongoose');
// const User = mongoose.model('user');
// const keys = require('../config/keys');

// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = keys.secretKey;

// module.exports = passport => {
//     passport.use(new jwtStrategy(opts, (jwt_payload, done) => {
//         User.findById(jwt_payload.id)
//         .then(user => {
//             if(user){
//                 return done(null, user);
//             }
//             return done(null, false);
//         })
//         .catch(err => console.log(err))
//     }));
// }