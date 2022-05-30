const sinon = require('sinon');
const {expect} = require ('chai');
const connection = require ('../../../models/connection');
const productsModel = require('../../../models/productsModel')

describe('Lista produtos camada model', () => {
  describe('Lista todos os produtos do banco de dados model', () => {
    before(() => {
      const execute = [{id: 1, name:'traje homem de ferro', quantity:1}];

      sinon.stub(connection, 'execute').resolves([execute])
    });
    after(() => {
      connection.execute.restore();
    })

    it('retorna um array com item model', async() => {
      const response = await productsModel.getAll();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })

    it('objeto tem as chaves id, name e quantity model', async() => {
      const [response] = await productsModel.getAll();
      expect(response).to.be.includes.keys('id','name','quantity');
    })
  })
})

describe('Lista produto pelo id camada model', () => {
  describe('lista o array com o produto pelo id model', () => {
    before(() => {
      const execute = [{id: 1, name:'traje homem de ferro', quantity:1}];

      sinon.stub(connection, 'execute').resolves([execute])
    });
    after(() => {
      connection.execute.restore();
    })

    it('retorna um array não vazio model', async() => {
      const response = await productsModel.getProductById();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
    it('retorna retorna o produto do id 1 model', async() => {
      const [response] = await productsModel.getProductById();
      expect(response).to.be.includes.keys('id','name','quantity');
    })
  })
})

describe('Deleta um produto model', () => {
  before(() => {
    const execute = [[{affectedRows: 1}]];

    sinon.stub(connection, 'execute').resolves(execute)
  });
  after(() => {
    connection.execute.restore();
  })
  it('retorna um array não vazio model', async() => {
    const response = await productsModel.deleteProducts(1);
    expect(response).to.be.an('array');
    expect(response).to.not.be.empty;
  })
})

describe('Adiciona um produto no banco model', () => {
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