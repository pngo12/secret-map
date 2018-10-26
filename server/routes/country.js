const express = require('express');
const router = express.Router();
const { 
    addProductToCountry, 
    getCountryAll,
    deleteProductFromCountry,
    findOneCountry
} = require ('../controllers/country')

// Query for all countries in DB
router.get('/', getCountryAll)

// Query for all countries in DB
router.get('/:name', findOneCountry)

// adding the country
router.post('/new', addProductToCountry)

// deleting the product from the country
router.put('/:id', deleteProductFromCountry)



module.exports = router