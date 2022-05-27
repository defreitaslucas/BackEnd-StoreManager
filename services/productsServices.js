const productsModels = require('../models/productsModel');

const getAllProducts = async () => {
  const response = await productsModels.getAll();
  return response;
};

const getProducts = async (id = null) => {
  const response = await productsModels.getProductById(id);
  if (response.length === 0) {
 return {
    code: 404,
    message: 'Product not found',
  }; 
}
  return response;
};

const createProducts = async (name, quantity) => {
  const products = await productsModels.getAll();
  const verificaProduct = products.find((product) => product.name === name);
  if (verificaProduct) return { code: 409, message: 'Product already exists' };

  const id = await productsModels.createProducts(name, quantity);
  return { id, name, quantity };
};

const updateProducts = async (name, quantity, id) => {
  const verificaProduct = await getProducts(id);
  if (verificaProduct.message) return { code: 404, message: 'Product not found' };

  const product = await productsModels.updateProducts(name, quantity, id);
  if (product.affectedRows === 1) { return { name, quantity, id }; }
};

module.exports = {
  getAllProducts,
  getProducts,
  createProducts,
  updateProducts,
};