const express = require('express');
const validatorHandler = require('../middlewares/validator');
const { ckeckRoles } = require('../middlewares/auth');
const { createUerSchema, getUserByIdSchema } = require('../schema/Users');
const UsersService = require('../services/Users');

const router = express.Router();
const service = new UsersService();

//Get

router.get('/',
ckeckRoles('admin'),
async (req, res, next) => {
    try {
        const users = await service.getUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

//Post

router.post('/',
ckeckRoles('admin'),
validatorHandler(createUerSchema, 'body'),
async (req, res, next) => {
    try {
        const user = await service.createUser(req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

//Delete

router.delete('/:id',
ckeckRoles('admin'),
validatorHandler(getUserByIdSchema, 'params'),
async (req, res, next) => {
    try {
        const user = await service.deleteUser(req.params.id);
        res.json(
            {
                message: 'User deleted',
                user
            }
        );
    } catch (error) {
        next(error);
    }
});

module.exports = router;