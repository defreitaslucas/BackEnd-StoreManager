// const { expect } = require('chai');
// const sinon = require('sinon');
// const salesModel = require('../../../models/salesModel');
// const connection = require('../../../models/connection');

// describe('Models getAll sales', () => {
//   describe('Funcao getAll', () => {
//     const db = [
//       {
//         "saleId": 1,
//         "date": "2021-04-05T04:54:29.000Z",
//         "productId": 1,
//         "quantity": 2
//       },
//       {
//         "saleId": 1,
//         "date": "2021-04-05T04:54:54.000Z",
//         "productId": 2,
//         "quantity": 2
//       }
//     ]

//     before(() => {
//       sinon.stub(connection, 'execute').resolves([db]);
//     });

//     after(() => {
//       connection.execute.restore();
//     });

//     it('Retorna sales', async () => {
//       const received  = await salesModel.getAll();

//       expect(received).to.be.deep.equal(db);
//     })
//   })

//   describe('Testa getSalesById', () => {
//     const db = []

//     before(() => {
//       sinon.stub(connection, 'execute').resolves([db]);
//     });

//     after(() => {
//       connection.execute.restore();
//     });

//     it('Retorna array vazio', async () => {
//       const received  = await salesModel.getSalesById(100);

//       expect(received).to.be.deep.equal([]);
//     })
//   })
// });
