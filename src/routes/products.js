const express = require('express');
const productsService = require('../services/Products');
const validatorHandler = require('../middlewares/validator');
const { ckeckRoles } = require('../middlewares/auth');
const { createProductSchema } = require('../schema/Products');

const router = express.Router();
const service = new productsService();

//Get

router.get('/', async (req, res, next) => {
    try {
        const products = await service.getProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
});

//Post

router.post('/',
ckeckRoles('admin'),
validatorHandler(createProductSchema, 'body'),
async (req, res, next) => {
    try {
        const product = await service.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
});

module.exports = router;