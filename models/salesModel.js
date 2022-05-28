const connection = require('./connection');

const serialize = (sales) => sales.map((sale) => ({
  saleId: sale.sale_id,
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
}));

const getAll = async () => {
  const query = (`SELECT a.product_id, a.sale_id, a.quantity, b.date
  FROM sales_products a 
  INNER JOIN sales b ON a.sale_id = b.id`);
  const [result] = await connection.execute(query);
  return serialize(result);
};

const getSalesById = async (id) => {
  const query = (`SELECT a.product_id, a.quantity, b.date 
  FROM sales_products as a 
  JOIN sales as b ON (a.sale_id = b.id)
  WHERE a.sale_id=?;`);
  const [result] = await connection.execute(query, [id]);
  return result.map((sale) => ({
   date: sale.date,
   productId: sale.product_id,
   quantity: sale.quantity,
  }));
};

const createSale = async (sales) => {
  const querySale = ('INSERT INTO sales (date) VALUES(CURRENT_TIMESTAMP)');
  const [resultSale] = await connection.execute(querySale);
  const id = resultSale.insertId;
  const querySp = ('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)');
  await sales.forEach((sale) => {
    const { productId, quantity } = sale;
     connection.execute(querySp, [id, productId, quantity]);
  });
  return id;
};

const deleteSales = async (id) => {
  const query = ('DELETE FROM sales_products WHERE sale_id = ?');
  return connection.execute(query, [id]);
};

module.exports = {
  getAll,
  getSalesById,
  createSale,
  deleteSales,
};