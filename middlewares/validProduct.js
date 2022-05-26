const Joi = require('joi');

const productsObjValid = Joi.object({
  name: Joi.string().min(5).max(30).required(),
  quantity: Joi.number().integer().min(1).required(),
}).messages({
  'any.required': '{{#label}} is required',
});

const validateProductsMiddleware = (req, res, next) => {
  const { error } = productsObjValid.validate(req.body, { abortEarly: false });
    if (error) {
    const messages = error.details.map((e) => e.message);
    return res.status(401).json({ errors: messages });
}
next();
};

module.exports = validateProductsMiddleware;