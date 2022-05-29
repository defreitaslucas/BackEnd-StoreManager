const salesServices = require('../services/salesServices');

const getAllSales = async (req, res) => {
    const result = await salesServices.getAllSales();
    res.status(200).json(result);
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
  return res.status(201).json(newSale);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;

  const newSale = await salesServices.updateSale(id, sales);

  if (newSale.statusCode) {
    return res.status(newSale.statusCode).json({ message: newSale.message });
  }

  return res.status(200).json({ saleId: id, itemUpdated: sales });
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
  updateSale,
  deleteSales,
};
