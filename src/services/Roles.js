const boom = require('@hapi/boom');
const { Op } = require ('sequelize')
const { models } = require('../libs/sequelize');

class RolesService {
    constructor(){}

    // Get all roles
    async getRoles() {
        const roles = await models.Role.findAll();
        return roles || boom.notFound();
    }

    // create a role
    async createRole(data) {
        const role = await models.Role.create(data);
        return role;
    }
}

module.exports = RolesService;