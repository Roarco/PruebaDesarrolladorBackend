const { Product, ProductSchema } = require('./Products');
const { Role, RoleSchema } = require('./Roles');
const { User, UserSchema } = require('./Users');
const { Sale, SaleSchema } = require('./Sales');

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Sale.init(SaleSchema, Sale.config(sequelize));

  Product.associate(sequelize.models);
  Role.associate(sequelize.models);
  User.associate(sequelize.models);
  Sale.associate(sequelize.models);
}

module.exports = setupModels;