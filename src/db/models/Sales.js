const { Model, DataTypes, Sequelize} = require('sequelize');
const fn = require('sequelize').fn;
const { USER_TABLE } = require('./Users');
const { PRODUCT_TABLE } = require('./Products');

const SALE_TABLE = 'sales';

const SaleSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: fn('uuid_generate_v4'),
        primaryKey: true,
    },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    saleAt: {
        type: DataTypes.DATE,
        flied: 'sale_at',
        defaultValue: Sequelize.NOW,
    },
    productsId: {
        type: DataTypes.UUID,
        flied: 'products_id',
        allowNull: false
    },
    usersId: {
        type: DataTypes.UUID,
        flied: 'users_id',
        allowNull: false
    },
};

class Sale extends Model {
    static associate(models) {
        this.belongsTo(models.User, { as: 'user', foreignKey: 'usersId' });
        this.belongsTo(models.Product, { as: 'product', foreignKey: 'productsId' });
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Sale',
            tableName: SALE_TABLE,
            timestamps: false
        }
    }
}

module.exports = {
    SaleSchema,
    Sale,
    SALE_TABLE
};