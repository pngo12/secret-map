const express = require('express');
const router = express.Router();
const { findSearchTerm } = require('../controllers/searchterm')

router.get('/:searchterm', searchTerm);

module.exports = router;