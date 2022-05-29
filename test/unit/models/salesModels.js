const sinon = require('sinon');
const {expect} = require ('chai');
const connection = require ('../../../models/connection');
const salesModel = require('../../../models/salesModel')

describe('Lista todas as vendas', () => {
  describe('Lista todas as vendas', () => {
    before(() => {
      const execute = [{saleId: 1,
      date: "2022-04-05T14:05:00.000Z",
      quantity: 2,
      productId: 1}];

      sinon.stub(connection, 'execute').resolves(execute)
    });
    after(() => {
      connection.execute.restore();
    })

    it('retorna a venda', async() => {
      const response = await salesModel.getAll();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
  })
})

describe('lista a venda por id', () => {
  describe('Lista a venda', () => {
    before(() => {
      const execute = [{
        saleId: 1,
        date: "2022-04-05T14:05:00.000Z",
        quantity: 2,
        productId: 1
      }];

      sinon.stub(connection, 'execute').resolves(execute)
    });
    after(() => {
      connection.execute.restore();
    })

    it('retorna a venda', async() => {
      const response = await salesModel.getSalesById();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
  })
})
describe('cria venda no banco', () => {
  before(async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
  });

  after(async () => {
    connection.execute.restore();
  });
  it('venda criada com sucesso', async () => {
    const result = await salesModel.createSale(1, 1, 10);

    expect(result).to.be.an('object');
    expect(result.affectedRows).to.equal(1);
  });
});

describe('deletar uma venda no banco', () => {
  before(() => {
    const execute = [[{affectedRows: 1}]];

    sinon.stub(connection, 'execute').resolves(execute)
  });
  after(() => {
    connection.execute.restore();
  })
  it('venda deletada com sucesso', async() => {
    const [response] = await salesModel.deleteSales(1);
    expect(response).to.be.an('array');
    expect(response).to.not.be.empty;
  })

}) 