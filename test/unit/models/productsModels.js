const sinon = require('sinon');
const {expect} = require ('chai');
const connection = require ('../../../models/connection');
const productsModel = require('../../../models/productsModel')

describe('Lista produtos', () => {
  describe('Lista todos os produtos do banco de dados', () => {
    before(() => {
      const execute = [{id: 1, name:'traje homem de ferro', quantity:1}];

      sinon.stub(connection, 'execute').resolves(execute)
    });
    after(() => {
      connection.execute.restore();
    })

    it('retorna um array com item', async() => {
      const response = await productsModel.getAll();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
  })
})

describe('Lista produto pelo id', () => {
  describe('lista o array com o produto pelo id', () => {
    before(() => {
      const execute = [{id: 1, name:'traje homem de ferro', quantity:1}];

      sinon.stub(connection, 'execute').resolves(execute)
    });
    after(() => {
      connection.execute.restore();
    })

    it('retorna um array não vazio', async() => {
      const response = await productsModel.getProductById();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
  })
})

describe('Deleta um produto', () => {
  before(() => {
    const execute = [[{affectedRows: 1}]];

    sinon.stub(connection, 'execute').resolves(execute)
  });
  after(() => {
    connection.execute.restore();
  })
  it('retorna um array não vazio', async() => {
    const response = await productsModel.deleteProducts(1);
    expect(response).to.be.an('array');
    expect(response).to.not.be.empty;
  })
})

describe('Adiciona um produto no banco', () => {
  before(() => {
    sinon.stub(connection, 'execute').resolves([{insertId: 1}])
  });
  after(() => {
    connection.execute.restore();
  })
  it('retorna o numero do novo id criado', async() => {
    const response = await productsModel.createProducts('name', 3);
    expect(response).to.be.an('number');
  })
})