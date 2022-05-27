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
  try {
    const { id } = req.params;
    const result = await productsServices.getProducts(id);
    res.status(200).json(result[0]);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: 'Product not found' });
  }
};

const createProducts = async (req, res) => {
  const { name, quantity } = req.body;
  const { code, message, newProduct } = await productsServices.createProducts(name, quantity);
  if (!newProduct) return res.status(code).json({ message });
  res.status(code).json(newProduct);
};

module.exports = {
  getAllProducts,
  getProducts,
  createProducts,
};
