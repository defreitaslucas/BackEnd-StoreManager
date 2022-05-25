const connection = require('./connection');

const getAll = async () => {
  const query = ('SELECT * FROM products;');
  const [result] = await connection.execute(query);
  return result;
};

const getProductById = async (id) => {
  const query = ('SELECT * FROM products WHERE id=?', [id]);
  const [result] = await connection.execute(query);
  return result;
};

module.exports = {
  getAll,
  getProductById,
};