const { Model, DataTypes, Sequelize} = require('sequelize');
const fn = require('sequelize').fn;

const PRODUCT_TABLE = 'products';

const ProductSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: fn('uuid_generate_v4'),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}

class Product extends Model {
    static associate(models) {

    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Product',
            tableName: PRODUCT_TABLE,
            timestamps: false
        }
    }
}

module.exports = {
    ProductSchema,
    Product,
    PRODUCT_TABLE
}