const express = require('express');

const router = express.Router();
const productsServices = require('../services/productsServices');

router.get('/', async (req, res) => {
  try {
    const result = await productsServices.getAllProducts();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productsServices.getProducts(id);
    res.status(200).json(result[0]);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
