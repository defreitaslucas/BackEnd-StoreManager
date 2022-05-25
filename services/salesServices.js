const salesModels = require('../models/salesModel');

const getSales = (id = null) => {
  if (id) {
    return salesModels.getProductById(id);
  }
  return salesModels.getAll();
};

module.exports = {
  getSales,
};