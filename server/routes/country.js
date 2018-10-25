const express = require('express');
const router = express.Router();
const { 
    addProductToCountry, 
    getCountryAll,
    deleteProductFromCountry 
} = require ('../controllers/country')

// Query for all countries in DB
router.get('/', getCountryAll)

// adding the country
router.put('/new', addProductToCountry)

// deleting the product from the country
router.put('/:id', deleteProductFromCountry)



module.exports = router