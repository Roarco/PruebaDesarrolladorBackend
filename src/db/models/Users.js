const { Model, DataTypes, Sequelize } = require('sequelize');
const fn = require('sequelize').fn;
const { ROLE_TABLE } = require('./Roles');

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: fn('uuid_generate_v4'),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lasName: {
        type: DataTypes.STRING(50),
        flied: 'last_name',
        allowNull: false
    },
    document: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    rolesId: {
        type: DataTypes.UUID,
        flied: 'roles_id',
        allowNull: false,
        references: {
            model: ROLE_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class User extends Model {
    static associate(models) {
        this.belongsTo(models.Role, { as: 'role', foreignKey: 'rolesId' });
        this.hasMany(models.Sale , {as: 'sales', foreignKey: 'usersId'});
    }

    static config(sequelize) {
        return {
            sequelize,
            modelName: 'User',
            tableName: USER_TABLE,
            timestamps: false
        }
    }
}

module.exports = {
    UserSchema,
    User,
    USER_TABLE
};