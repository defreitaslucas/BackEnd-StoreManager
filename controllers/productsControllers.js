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

const createProducts = async (_req, _res) => {
  // const { name, quantity } = req.body;
  // const { code, message, newProduct } = await productsServices.createProducts(name, quantity);
  // if (!newProduct) return res.status(code).json({ message });
  // res.status(code).json(newProduct);
};

const updateProducts = async (_req, _res) => {
  // const { name, quantity } = req.body;
  // const { code, message, newProduct } = await productsServices.createProducts(name, quantity);
  // if (!newProduct) return res.status(code).json({ message });
  // res.status(code).json(newProduct);
};

module.exports = {
  getAllProducts,
  getProducts,
  createProducts,
  updateProducts,
};
