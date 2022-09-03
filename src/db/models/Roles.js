const { Model, DataTypes, Sequelize} = require('sequelize');
const fn = require('sequelize').fn;

const ROLE_TABLE = 'roles';

const RoleSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: fn('uuid_generate_v4'),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}

class Role extends Model {
    static associate(models) {
        this.hasMany(models.User, { as: 'users', foreignKey: 'rolesId' });
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Role',
            tableName: ROLE_TABLE,
            timestamps: false
        }
    }
}

module.exports = {
    RoleSchema,
    Role,
    ROLE_TABLE
}