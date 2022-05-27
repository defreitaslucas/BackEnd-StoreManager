const connection = require('./connection');

const getAll = async () => {
  const query = ('SELECT * FROM products;');
  const [result] = await connection.execute(query);
  return result;
};

const getProductById = async (id) => {
  const query = ('SELECT * FROM products WHERE id=?');
  const [result] = await connection.execute(query, [id]);
  return result.map((product) => ({
    id: product.id,
    name: product.name,
    quantity: product.quantity,
  }));
};

const createProducts = async (name, quantity) => {
  const query = ('INSERT INTO products (name, quantity) VALUES (?, ?)');
  const [product] = await connection.execute(query, [name, quantity]);

  const newProduct = {
    id: product.insertId,
    name,
    quantity,
  };
  return newProduct;
};

module.exports = {
  getAll,
  getProductById,
  createProducts,
};