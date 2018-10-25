const express = require('express');
const router = express.Router();
const { 
    getCountryByProduct,
    getProductByCountry, 
    createCountry,
    addProductToCountry, 
    deleteProduct,
    getCountry,
    deleteProductFromCountry 
} = require ('../controllers/admin')


// getting the countries by the product
router.get( '/product', getCountryByProduct)

// getting the countries
router.get( '/country', getCountry)


// adding the country
router.post('/country/new', createCountry)


// adding the product to the country
// router.post('/', addProductToCountry)

// getting the products by country ID
router.get( '/:id', getProductByCountry)

// deleting the product from the country
router.delete('/:id', deleteProductFromCountry)

// deleting the product from the country
router.delete('/product/:id', deleteProduct)

module.exports = router