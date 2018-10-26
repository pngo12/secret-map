const express = require('express');
const router = express.Router();

const {
    getProduct,
    upload
} = require ('../controllers/products')

//Get all products in the DB
router.get('/', getProduct)

router.post('/upload', upload)

module.exports = router;