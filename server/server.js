const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database config
const db = require('./config/keys').mongoURI;

// Connection to Mongoose
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`🏃 Running on port: ${port}`));