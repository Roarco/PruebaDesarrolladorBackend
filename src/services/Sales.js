const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class SalesService {
  constructor() {}

  // Get all sales
  async getSales() {
    const sales = await models.Sale.findAll({
      include: ["user", "product"],
    });
    for (const sale of sales) {
      delete sale.dataValues.user.dataValues.id;
      delete sale.dataValues.product.dataValues.id;
    }
    return sales;
  }

  // create a sale
  async createSale(data) {
    const sale = await models.Sale.create(data);
    return sale;
  }

  // update a sale
  async updateSale(id, change) {
    const sale = await models.Sale.update(change, {
      where: {
        id,
      },
    });
    if(sale[0] === 0){
      throw boom.notFound('Sale not found');
    }
    return sale;
  }

  // delete a sale
  async deleteSale(id) {
    const sale = await models.Sale.destroy({
      where: {
        id,
      },
    });
    if(sale === 0){
      throw boom.notFound('Sale not found');
    }
    return sale;
  }

  // get total sales by day
  async getTotalSalesByDay(query) {
    const { date } = query;
    const sales = await models.Sale.findAll({
      include: ["user", "product"],
    });
    const salesDate = [];

    for (const sale of sales) {
      const formatDate = new Date(sale.dataValues.saleAt).toLocaleDateString()
      if (formatDate === date) {
        salesDate.push(sale);
      }
    }
    let total = 0;
    for (const sale of salesDate) {
      total += sale.dataValues.product.dataValues.price * sale.dataValues.qty;
    }
    return total;
  }

  // get total sales by month
  async getTotalSalesByMonth(query) {
    const { month } = query;
    const sales = await models.Sale.findAll({
      include: ["user", "product"],
    });
    const salesMonth = [];

    for (const sale of sales) {
      const formatDate = new Date(sale.dataValues.saleAt).toLocaleDateString()
      const monthSale = formatDate.split('/')[0];
      if (monthSale === month) {
        salesMonth.push(sale);
      }
    }
    let total = 0;
    for (const sale of salesMonth) {
      total += sale.dataValues.product.dataValues.price * sale.dataValues.qty;
    }
    return total;
  }
}

module.exports = SalesService;
