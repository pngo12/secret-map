const express = require('express');
const router = express.Router();

const {
    getProduct,
    createProduct,
} = require ('../controllers/products')

router.get('/', getProduct)
router.post('/new', createProduct)

module.exports = router;