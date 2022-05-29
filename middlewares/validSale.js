const Joi = require('joi');

const salesObjValid = Joi.object().keys({
  productId: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

const validateSaleMiddleware = (req, res, next) => {
  req.body.forEach((element) => {
    const { error } = salesObjValid.validate(element);
    if (error) {
      const { type, message } = error.details[0];

      const statusCode = {
        'any.required': 400,
        'string.min': 422,
        'number.min': 422,
      };

      return res.status(statusCode[type]).json({ message });
    }
  });
  next();
};

// const validateSaleMiddleware = (req, res, next) => {
//   const sales = req.body;
//   sales.forEach((sale) => {
//     const { productId, quantity } = sale;
//     if (!productId) {
//       return res.status(400).json({ message: '"productId" is required' });
//     }
//     if (!quantity) {
//       return res.status(400).json({ message: '"quantity" is required' });
//     }
  
//     if (quantity <= 0) {
//       return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
//     }
//   });
//   next();
// }; 

module.exports = { validateSaleMiddleware };