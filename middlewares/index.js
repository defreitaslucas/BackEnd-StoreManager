const validateProductsMiddleware = require('./validProduct');
const { validateSaleMiddleware } = require('./validSale');
const middlewareErrors = require('./error');

module.exports = {
  validateProductsMiddleware,
  middlewareErrors,
  validateSaleMiddleware,
};