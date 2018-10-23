const express = require('express');
const router = express.Router();
const { getCountryByProduct, getProductByCountry, addProductToCountry, deleteProductFromCountry } = require ('../controllers/admin')

// getting the countries by the product
router.get( '/:id', getCountryByProduct)


// getting the products by country ID
router.get( '/:id', getProductByCountry)

// adding the product to the country
router.post('/', addProductToCountry)

// deleting the product from the country
router.delete('/id', deleteProductFromCountry)

module.exports = router