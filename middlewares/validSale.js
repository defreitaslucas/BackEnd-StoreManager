// const Joi = require('joi');

// const salesObjValid = Joi.object({
//   quantity: Joi.number().integer().min(1).required(),
//   productId: Joi.number().integer().required(),
// });
// const salesArrayValid = Joi.array().items(salesObjValid);

// const validateSaleMiddleware = (req, res, next) => {
//   const { error } = salesArrayValid.validate(req.body, { abortEarly: false });
//   if (error) {
//     if (error.details[0].type === 'number.min' || error.details[0].type === 'string.min') {
//       const messages = error.details.map((e) => e.message);
//       return res.status(422).json({ message: messages[0] });
//     } 
//     const messages = error.details.map((e) => e.message);
//     res.status(400).json({ message: messages[0] });
//   }
//   next();
// };

const validateSaleMiddleware = (req, res, next) => {
  const sales = req.body;
  sales.forEach((sale) => {
  const { productId, quantity } = sale;
  if (!productId) {
  return res.status(400).json({ message: '"productId" is required' });
  }
  if (!quantity) {
  return res.status(400).json({ message: '"quantity" is required' });
  }
  
  if (quantity <= 0) {
  return res
  .status(422)
  .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  });
  next();
  }; 

module.exports = validateSaleMiddleware;