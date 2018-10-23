const express = require('express');
const router = express.Router();
const {
    getProducts
} = './controllers/products';


router.get('/dashboard', getProducts)


module.exports = router;