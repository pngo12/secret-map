const express = require('express');
const router = express.Router();
const { testRoute } = require('../controllers/test')

router.get('/:name', testRoute);

module.exports = router;