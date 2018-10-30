const express = require('express');
const router = express.Router();
const { 
    getCountryAll,
    findOneCountry,
    // addProductToCountry, 
    // removeProductFromCountry
} = require ('../controllers/country')

// Query for all countries in DB
router.get('/', getCountryAll)

// Query for ONE country in DB with it's products
router.get('/:name', findOneCountry)

 // adding a product to a country
// router.post('/new', addProductToCountry)

 // deleting the product from the country
// router.put('/', removeProductFromCountry)

module.exports = router