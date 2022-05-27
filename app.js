const express = require('express');

const productsController = require('./controllers/productsControllers');
const salesController = require('./controllers/salesControllers');
const middlewares = require('./middlewares');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAllProducts);
app.get('/products/:id', productsController.getProducts);

app.get('/sales', salesController.getAllSales);
app.get('/sales/:id', salesController.getSales);

app.post('/products', middlewares.validateProductsMiddleware, productsController.createProducts);
// app.post('/sales', palesController.);

app.use(middlewares.middlewareErrors);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
