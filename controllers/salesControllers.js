const salesServices = require('../services/salesServices');

const getAllSales = async (req, res) => {
  try {
    const result = await salesServices.getAllSales();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const getSales = async (req, res) => {
    const { id } = req.params;
    const result = await salesServices.getSales(id);
    if (result.message) return res.status(result.code).json({ message: result.message });
    res.status(200).json(result);
};

const createSale = async (_req, _res) => {
  // const { name, quantity } = req.body;
  // const { code, message, newProduct } = await productsServices.createProducts(name, quantity);
  // if (!newProduct) return res.status(code).json({ message });
  // res.status(code).json(newProduct);
};

const updateSales = async (_req, _res) => {
  // const { name, quantity } = req.body;
  // const { code, message, newProduct } = await productsServices.createProducts(name, quantity);
  // if (!newProduct) return res.status(code).json({ message });
  // res.status(code).json(newProduct);
};

module.exports = {
  getAllSales,
  getSales,
  createSale,
  updateSales,
};
