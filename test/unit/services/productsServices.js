// const { expect } = require('chai');
// const sinon = require('sinon');
// const productsModel = require('../../../models/productsModel');
// const productsServices = require('../../../services/productsServices');

// describe('Testando Services', () => {
//   const db_mocka = [
//     {
//       id: 2,
//       name: "escudo",
//       quantity: 13
//     },
//     {
//       id: 1,
//       name: "espada",
//       quantity: 18
//     }
//   ]

//   before(() => {
//     sinon.stub(productsModel, 'getAllProducts').resolves(db_mocka);
//   });

//   after(() => {
//     productsModel.getAllProducts.restore();
//   });

//   it('getAllProducts retorna objetos ordenado por id', async () => {
//     const expected = [
//       {
//         id: 1,
//         name: "espada",
//         quantity: 18
//       },
//       {
//         id: 2,
//         name: "escudo",
//         quantity: 13
//       }
//     ]

//     const received  = await productsServices.getAllProducts()

//     expect(received).to.be.deep.equal(expected);
//   });
// });

// describe('getProducts procura product id 1', () => {
//   const mocka = [ { id: 1, name: 'Martelo de Thor', quantity: 10 } ];

//   before(() => {
//     sinon.stub(productsModel, 'getProducts').resolves(mocka);
//   });

//   after(() => {
//     productsModel.getProducts.restore();
//   });

//   it('A funcao getProducts retorna um objeto', async () => {
//     const expected = { id: 1, name: 'Martelo de Thor', quantity: 10 };

//     const received = await productsServices.getProducts(1);

//     expect(received).to.be.deep.equal(expected);
//   });

// });

// describe('getProducts procura product id 300', () => {
//   const mocka = [];

//   before(() => {
//     sinon.stub(productsModel, 'getProducts').resolves(mocka);
//   });

//   after(() => {
//     productsModel.getProducts.restore();
//   });

//   it('Deve retorna objeto de {statusCode: 404, message: "Product not found"}', async () => {
//     const expected = { statusCode: 404, message: "Product not found" };

//     const received = await productsServices.getProducts(1);

//     expect(received).to.be.deep.equal(expected);
//   });

// });