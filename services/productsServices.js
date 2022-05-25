const productsModels = require('../models/productsModel');

const getAllProducts = async () => {
  const response = await productsModels.getAll();
  return response;
};

const getProducts = async (id = null) => {
  const response = await productsModels.getProductById(id);
  if (!response.length) throw Error(400, 'Product not found');
  return response;
};

module.exports = {
  getAllProducts,
  getProducts,
};