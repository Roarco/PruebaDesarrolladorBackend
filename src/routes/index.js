const express = require('express');

const products = require('./products');
const roles = require('./roles');
const users = require('./users');
const sales = require('./sales');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', products);
    router.use('/roles', roles);
    router.use('/users', users);
    router.use('/sales', sales);
}

module.exports = routerApi;