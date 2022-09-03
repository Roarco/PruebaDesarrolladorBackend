const express = require('express');
const productsService = require('../services/Products');
//const validatorHandler = require('../middlewares/validator');

const router = express.Router();
const service = new productsService();

router.get('/', async (req, res, next) => {
    res.send('Hello World!');
});

module.exports = router;