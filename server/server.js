const express = require('express');
const app = express();
const admin = require('./routes/admin/admin')

const port = 4000

// Routes
app.use('/products/admin', )


app.listen(port, console.log('Running on port 4000'))