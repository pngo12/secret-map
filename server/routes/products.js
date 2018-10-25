const express = require('express');
const router = express.Router();

const {
    getProduct,
    createProduct,
    findProduct,
    createCountry
} = require ('../controllers/products')

router.get('/', getProduct)
router.post('/new', createProduct)
router.get('/:id', findProduct)
router.post('/country', createCountry)

module.exports = router;