const connection = require('./connection');

const getAll = async () => {
  const query = ('SELECT * FROM sales;');
  const [result] = await connection.execute(query);
  return result;
};

const getSalesById = async (id) => {
  const query = ('SELECT * FROM sales WHERE id=?', [id]);
  const [result] = await connection.execute(query);
  return result;
};

module.exports = {
  getAll,
  getSalesById,
};