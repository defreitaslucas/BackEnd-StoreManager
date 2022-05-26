const express = require('express');
const routes = require('./routes');
const app = require('./app');
const middlewares = require('./middlewares');
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto
app.use(express.json());
app.use(routes);
app.use(middlewares.middlewareErrors);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
