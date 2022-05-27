const Joi = require('joi');

const productsObjValid = Joi.object({
  name: Joi.string().min(5).max(30).required(),
  quantity: Joi.number().integer().min(1).required(),
});

const validateProductsMiddleware = (req, res, next) => {
  const { error } = productsObjValid.validate(req.body);
  if (error) {    
    if (error.details[0].type === 'number.min' || error.details[0].type === 'string.min') {
      const messages = error.details.map((e) => e.message);
      return res.status(422).json({ message: messages[0] });
    } 
    const messages = error.details.map((e) => e.message);
    return res.status(400).json({ message: messages[0] });
  }
  next();
};

module.exports = validateProductsMiddleware;