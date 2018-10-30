const express = require('express');
const router = express.Router();
const { getCountryFromDatabase } = require('../controllers/database');


router.get('/:continent', getCountryFromDatabase);

module.exports = router;