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

const updateSale = async (saleId, sales) => {
  const promises = [];
  sales.forEach((sale) => {
    promises.push(salesModels.updateSale(saleId, sale.productId, sale.quantity));
  });

  const newSale = await Promise.all(promises);

  if (newSale.some((sale) => sale.statusCode)) {
    const { statusCode, message } = newSale.find((sale) => sale.statusCode);
    return { statusCode, message };
  }

  return { ok: true };
};

const deleteSales = async (id) => {
  const getSalesById = await getSales(id);
  if (getSalesById.message) return { code: 404, message: 'Sale not found' };
  return salesModels.deleteSales(id);
};

module.exports = {
  getAllSales,
  getSales,
  createSale,
  updateSale,
  deleteSales,
};