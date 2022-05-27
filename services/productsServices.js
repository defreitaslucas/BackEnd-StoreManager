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

const createProducts = async (name, quantity) => {
  const products = await productsModels.getAll();
  const verificaProduct = products.find((product) => product.name === name);
  if (verificaProduct) return { code: 409, message: 'Product already exists' };

  const product = await productsModels.createProducts(name, quantity);
  return { code: 201, product };
};

module.exports = {
  getAllProducts,
  getProducts,
  createProducts,
};