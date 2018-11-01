const express = require('express');
const router = express.Router();
const { searchCategory } = require('../controllers/searchcategory')

router.get('/:name', searchCategory);

module.exports = router;