const productsModels = require('../models/productsModel');

const getProducts = (id = null) => {
  if (id) {
    return productsModels.getProductById(id);
  }
  return productsModels.getAll();
};

module.exports = {
  getProducts,
};