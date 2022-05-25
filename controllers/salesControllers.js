const express = require('express');

const router = express.Router();
const salesServices = require('../services/salesServices');

router.get('/', async (req, res) => {
  try {
    const result = await salesServices.getAllSales();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await salesServices.getSales(id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: 'Sale not found' });
  }
});

module.exports = router;
