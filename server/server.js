const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const Products = require('./routes/products');
const newUsers = require('./routes/users');
const passport = require('passport');

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database config
const db = require('./config/keys').mongoURI;

// Connection to Mongoose
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Initialize Passport 
app.use(passport.initialize());
require('./config/passport')(passport)

const port = process.env.PORT || 5000;

app.use('/admin', adminRoutes);
app.use('/product', Products);
app.use('/create', newUsers);

app.listen(port, () => console.log(`🏃 Running on port: ${port}`));

module.exports = app;