const express = require('express');
const router = express.Router();
const { 
    getCountryAll,
    findOneCountry,
} = require ('../controllers/country')

// Query for all countries in DB
router.get('/', getCountryAll)

// Query for ONE country in DB with it's products
router.get('/:name', findOneCountry)

module.exports = router