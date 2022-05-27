// const { expect } = require('chai');
// const sinon = require('sinon');
// const productsModel = require('../../../models/productsModel');
// const connection = require('../../../models/connection');

// describe('Testando models products', () => {
//   describe('getAll', () => {
//     const db = [
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

//     before(() => {
//       sinon.stub(connection, 'execute').resolves([db]);
//     });

//     after(() => {
//       connection.execute.restore();
//     });

//     it('Retorna todos os produtos', async () => {
//       const received  = await productsModel.getAll();

//       expect(received).to.be.deep.equal(db);
//     });

//   })

//   describe('Retorna getProductById', () => {
//     const db = []

//     before(() => {
//       sinon.stub(connection, 'execute').resolves([db]);
//     });

//     after(() => {
//       connection.execute.restore();
//     });

//     it('Retorna array vazio', async () => {
//       const received  = await productsModel.getProductById(100);

//       expect(received).to.be.deep.equal([]);
//     })
//   })
// });
