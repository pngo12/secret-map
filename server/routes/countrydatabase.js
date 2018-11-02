const express = require('express');
const router = express.Router();
const { getCountryFromDatabase } = require('../controllers/database');

router.get('/:Continent', getCountryFromDatabase);

module.exports = router;