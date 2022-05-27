// const { expect } = require('chai');
// const sinon = require('sinon');
// const salesServices = require('../../../services/salesServices');
// const salesControllers = require('../../../controllers/salesControllers');

// describe('Testando controle sales getAllSales', () => {
//   const req = {};
//   const res = {};

//   const mocka = [
//     {
//       saleId: 1,
//       date: '2022-07-05T17:18:00.000Z',
//       productId: 1,
//       quantity: 10
//     },
//     {
//       saleId: 1,
//       date: '2022-07-05T17:18:00.000Z',
//       productId: 2,
//       quantity: 5
//     },
//     {
//       saleId: 2,
//       date: '2022-07-05T17:18:00.000Z',
//       productId: 3,
//       quantity: 2
//     }
//   ]

//   before(() => {
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns();

//     sinon.stub(salesServices, 'getAllSales').resolves(mocka);
//   });

//   after(() => {
//     salesServices.getAllSales.restore();
//   })

//   it('getAllSales retorna status 200 quando sucesso, e json', async () => {
//     await salesControllers.getAllSales(req, res);

//     expect(res.status.calledWith(200)).to.be.true;
//     expect(res.json.calledWith(mocka)).to.be.true;
//   })
// });

// describe('Testando getSales', () => {
//   const req = {
//     params: { id: 1 },
//   };
//   const res = {};

//   const mocka = [
//     { date: '2022-07-05T17:18:00.000Z', productId: 1, quantity: 2 },
//     { date: '2022-07-05T17:18:00.000Z', productId: 2, quantity: 8 }
//   ]

//   before(() => {
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns();

//     sinon.stub(salesServices, 'getSales').resolves(mocka);
//   });

//   after(() => {
//     salesServices.getSales.restore();
//   })

//   it('getSales retorna status 200 quando sucesso, e json', async () => {
//     await salesControllers.getSales(req, res);

//     expect(res.status.calledWith(200)).to.be.true;
//     expect(res.json.calledWith(mocka)).to.be.true;
//   })
// });

// describe('Testando getSales', () => {
//   const req = {
//     params: { id: 1 },
//   };
//   const res = {};

//   const mocka = {
//     statusCode: 404,
//     message: 'Sale not found',
//   }

//   before(() => {
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns();

//     sinon.stub(salesServices, 'getSales').resolves(mocka);
//   });

//   after(() => {
//     salesServices.getSales.restore();
//   })

//   it('Quando nao encontrado getSales Retorna object not found', async () => {
//     await salesControllers.getSales(req, res);

//     expect(res.status.calledWith(404)).to.be.true;
//     expect(res.json.calledWith({ message: 'Sale not found' })).to.be.true;
//   })
// });
