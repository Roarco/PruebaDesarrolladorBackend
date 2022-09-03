const joi = require('joi');


const qty = joi.number().min(1);
const productsId = joi.string();
const usersId = joi.string();

const createSaleSchema = joi.object({
    qty: qty.required(),
    productsId: productsId.required(),
    usersId: usersId.required()
});

const updateSaleSchema = joi.object({
    qty: qty,
    productsId: productsId,
    usersId: usersId
});

const getSaleSchema = joi.object({
    id: joi.string().required()
});

module.exports = {
    createSaleSchema,
    updateSaleSchema,
    getSaleSchema
};