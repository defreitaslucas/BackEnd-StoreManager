const sinon = require('sinon');
const {expect} = require ('chai');
const connection = require ('../../../models/connection');
const salesModel = require('../../../models/salesModel')

describe('Lista todas as vendas model', () => {
  describe('Lista todas as vendas model', () => {
    before(() => {
      const execute = [{saleId: 1,
      date: "2022-04-05T14:05:00.000Z",
      quantity: 2,
      productId: 1}];

      sinon.stub(connection, 'execute').resolves([execute])
    });
    after(() => {
      connection.execute.restore();
    })

    it('retorna a venda model', async() => {
      const response = await salesModel.getAll();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
  })
})

describe('lista a venda por id model', () => {
  describe('Lista a venda model', () => {
    before(() => {
      const execute = [{
        saleId: 1,
        date: "2022-04-05T14:05:00.000Z",
        quantity: 2,
        productId: 1
      }];

      sinon.stub(connection, 'execute').resolves([execute])
    });
    after(() => {
      connection.execute.restore();
    })

    it('retorna a venda model', async() => {
      const response = await salesModel.getSalesById();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
  })
})
// describe('cria venda no banco model', () => {
//   before(async () => {
//     sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
//   });

//   after(async () => {
//     connection.execute.restore();
//   });
//   it('venda criada com sucesso model', async () => {
//     const [result] = await salesModel.createSale(1, 1, 10);
//     console.log(result);
//     expect(result).to.be.an('object');
//     expect(result.affectedRows).to.equal(1);
//   });
// });

describe('deletar uma venda no banco model', () => {
  before(() => {
    const execute = [[{affectedRows: 1}]];

    sinon.stub(connection, 'execute').resolves(execute)
  });
  after(() => {
    connection.execute.restore();
  })
  it('venda deletada com sucesso model', async() => {
    const [response] = await salesModel.deleteSales(1);
    expect(response).to.be.an('array');
    expect(response).to.not.be.empty;
  })

}) 