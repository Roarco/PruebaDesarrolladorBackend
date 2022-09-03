const joi = require('joi');

const name = joi.string().max(50);
const price = joi.number().min(1);
const description = joi.string().max(100);

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required()
});

module.exports = {
    createProductSchema
};