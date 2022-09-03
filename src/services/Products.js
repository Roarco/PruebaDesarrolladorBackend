const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {
    constructor() {}

    // Get all products
    async getProducts() {
        const products = await models.Product.findAll();
        return products || boom.notFound();
    }

    // create a product
    async createProduct(data) {
        const product = await models.Product.create(data);
        return product;
    }
}

module.exports = ProductsService;