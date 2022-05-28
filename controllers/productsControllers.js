const productsServices = require('../services/productsServices');

const getAllProducts = async (req, res) => {
  try {
    const result = await productsServices.getAllProducts();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const getProducts = async (req, res) => {
    const { id } = req.params;
    const result = await productsServices.getProducts(id);
    if (result.message) return res.status(result.code).json({ message: result.message });
    res.status(200).json(result[0]);
};

const createProducts = async (req, res) => {
  const { name, quantity } = req.body;
  const newProduct = await productsServices.createProducts(name, quantity);
  if (newProduct.message) return res.status(newProduct.code).json({ message: newProduct.message });
  res.status(201).json(newProduct);
};

const updateProducts = async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const response = await productsServices.updateProducts(name, quantity, id);
  if (response.message) {
    return res.status(response.code).json({ message: response.message });
  }
  return res.status(200).json(response);
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  const result = await productsServices.deleteProducts(id);
  if (result.message) { return res.status(result.code).json({ message: result.message }); }
  return res.status(204).end();
};

module.exports = {
  getAllProducts,
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
