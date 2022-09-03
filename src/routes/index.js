const express = require('express');

const products = require('./products');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', products);
}

module.exports = routerApi;