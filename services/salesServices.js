const salesModels = require('../models/salesModel');

const getAllSales = async () => {
  const response = await salesModels.getAll();
  return response;
};

const getSales = async (id = null) => {
  const response = await salesModels.getSalesById(id);
  if (response.length === 0) {
 return {
    code: 404,
    message: 'Sale not found',
  }; 
}
  return response;
};

const createSale = async (sale) => {
  const id = await salesModels.createSale(sale);
  return {
    id,
    itemsSold: sale,
  };
};

module.exports = {
  getAllSales,
  getSales,
  createSale,
};