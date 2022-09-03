const { Product, ProductSchema } = require('./Products');

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;