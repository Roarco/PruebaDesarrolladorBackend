const joi = require('joi');

const name = joi.string().max(50);

const createRoleSchema = joi.object({
    name: name.required(),
});

module.exports = {
    createRoleSchema,
};