const express = require('express');
const router = express.Router();

const {
    getProduct,
    newProduct,
    removeProduct,
    editProduct
} = require ('../controllers/products')

// Get all products in the Database
router.get('/', getProduct)

// Add a Product to the database
router.post('/new', newProduct)

// Delete a product in the database
router.delete('/remove', removeProduct)

// Edit a product in the database
router.put('/edit', editProduct)

module.exports = router;