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

const createSale = async (req, res) => {
  const sale = req.body;
  const newSale = await salesServices.createSale(sale);
  res.status(201).json(newSale);
};

const updateSales = async (_req, _res) => {
  // const { name, quantity } = req.body;
  // const { code, message, newProduct } = await productsServices.createProducts(name, quantity);
  // if (!newProduct) return res.status(code).json({ message });
  // res.status(code).json(newProduct);
};

const deleteSales = async (req, res) => {
  const { id } = req.params;
  const result = await salesServices.deleteSales(id);
  if (result.message) { return res.status(result.code).json({ message: result.message }); }
  return res.status(204).end();
};

module.exports = {
  getAllSales,
  getSales,
  createSale,
  updateSales,
  deleteSales,
};
