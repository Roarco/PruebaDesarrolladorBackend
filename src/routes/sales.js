const express = require('express');
const SalesService = require('../services/Sales');
const validatorHandler = require('../middlewares/validator');
const { ckeckRoles } = require('../middlewares/auth');
const { createSaleSchema, updateSaleSchema, getSaleSchema } = require('../schema/Sales');

const router = express.Router();
const service = new SalesService();

//Get

router.get('/', async (req, res, next) => {
    try {
        const sales = await service.getSales();
        res.json(sales);
    } catch (error) {
        next(error);
    }
});

router.get('/valorTotalVentasDia',
ckeckRoles('admin'),
async (req, res, next) => {
    try {
        const total = await service.getTotalSalesByDay(req.query);
        res.json({
            total
        });
    } catch (error) {
        next(error);
    }
});

//Post

router.post('/',
validatorHandler(createSaleSchema, 'body'),
async (req, res, next) => {
    try {
        const sale = await service.createSale(req.body);
        res.status(201).json(sale);
    } catch (error) {
        next(error);
    }
});

// Patch

router.patch('/:id',
ckeckRoles('admin'),
validatorHandler(getSaleSchema, 'params'),
validatorHandler(updateSaleSchema, 'body'),
async (req, res, next) => {
    try {
        const { id } = req.params;
        const sale = await service.updateSale(id, req.body);
        res.json({
            message: 'Sale updated'
        });
    } catch (error) {
        next(error);
    }
});

// Delete

router.delete('/:id',
ckeckRoles('admin'),
validatorHandler(getSaleSchema, 'params'),
async (req, res, next) => {
    try {
        const { id } = req.params;
        const sale = await service.deleteSale(id);
        res.json({
            message: 'Sale deleted'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;