const express = require('express');
const rolesService = require('../services/Roles');
const validatorHandler = require('../middlewares/validator');
const { createRoleSchema } = require('../schema/Roles');
const { ckeckRoles } = require('../middlewares/auth');

const router = express.Router();
const service = new rolesService();

// Get
router.get('/',
async (req, res, next) => {
    try {
        const roles = await service.getRoles();
        res.json(roles);
    } catch (error) {
        next(error);
    }
});

// Post
router.post('/',
ckeckRoles('admin'),
validatorHandler(createRoleSchema, 'body'),
async (req, res, next) => {
    try {
        const role = await service.createRole(req.body);
        res.status(201).json(role);
    } catch (error) {
        next(error);
    }
}
);

module.exports = router;