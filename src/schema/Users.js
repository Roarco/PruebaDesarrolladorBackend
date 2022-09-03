const joi = require('joi');

const name = joi.string().max(50);
const lastName = joi.string().max(50);
const document = joi.string().max(50);
const rolesId = joi.string();


const createUerSchema = joi.object({
    name : name.required(),
    lastName : lastName.required(),
    document : document.required(),
    rolesId : rolesId.required()
});

const getUserByIdSchema = joi.object({
    id : joi.string().required()
});

module.exports = {
    createUerSchema,
    getUserByIdSchema
};