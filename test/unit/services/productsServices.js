const sinon = require('sinon');
const {expect} = require ('chai');
const productsService = require('../../../services/productsServices')
const productsModel = require('../../../models/productsModel')

describe('Lista todos os produtos services', () => {
  describe('lista produtos services', () => {
    before(() => {
      const result = [[
          { id: 1, name: 'Martelo de Thor', quantity: 10 },
          { id: 2, name: 'Traje de encolhimento', quantity: 20 }
        ]]

      sinon.stub(productsModel, 'getAll').resolves([result])
    });
    after(() => {
      productsModel.getAll.restore();
    })

    it('lista os produtos services', async() => {
      const response = await productsService.getAllProducts();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
  })
})

describe('lista produtos por id services', () => {
  describe('se produto nao existir services', () => {
    before(() => {
      const execute = [{code: 404, message: 'Product not found'}];

      sinon.stub(productsModel, 'getProductById').resolves(execute)
    });
    after(() => {
      productsModel.getProductById.restore();
    })
    it('retonar um array com code e message', async() => {
      const [response] = await productsService.getProducts(1);
      expect(response).to.be.an('object');
      expect(response).to.has.keys('code', 'message')
    })
  })

  describe('lista o produto por id services', () => {
    before(() => {
      const result = {id: 1, name:'traje homem de ferro', quantity:1};

      sinon.stub(productsModel, 'getProductById').resolves(result)
    });
    after(() => {
      productsModel.getProductById.restore();
    })

    it('retorna um objeto com as chaves id, name e quantity services', async() => {
      const result = await productsService.getProducts(1);
      expect(result).to.be.an('object');
      expect(result).to.has.keys('id', 'name', 'quantity')
    })
  })
})

describe('adiciona produto no banco services', () => {
  describe('cria o produto no banco services', () => {
    const product = {
      id: 1,
      name: "traje homem de ferro",
      quantity: 1
    }

    before(async () => {
      const execute = { insertId: 1 };

      sinon.stub(productsModel, 'createProducts').resolves(execute);
      sinon.stub(productsModel, 'getAll').resolves([product]);
    });

    after(async () => {
      productsModel.createProducts.restore();
      productsModel.getAll.restore();
    });
    it('cria o produto services', async () => {
      const result = await productsService.createProducts({name: 'traje do homem de ferro', quantity: 1});

      expect(result).to.include.all.keys('id', 'name', 'quantity');
    });
  });
});
describe('Deleta um produto services', ()=> {
  // describe('caso o produto nao exista no banco services', () => {
  //   before(() => {
  //     const execute = [{code: 404, message: 'Product not found'}];
  //     sinon.stub(productsModel, 'getProductById').resolves([execute])
  //   });
  //   after(() => {
  //     productsModel.getProductById.restore();
  //   })

  //   it('retorna um objeto com as chaves code e message services', async() => {
  //     const [response] = await productsService.deleteProducts(1);
  //     expect(response).to.be.an('object');
  //     expect(response).to.has.keys('code', 'message')
  //   })
  // })

  describe('deleta um produto services', () => {
    before(() => {
      sinon.stub(productsModel, 'getProductById').resolves([[123]])
      sinon.stub(productsModel, 'deleteProducts').resolves([[{affectedRows: 1}]])
    });
    after(() => {
      productsModel.getProductById.restore();
      productsModel.deleteProducts.restore();
    })
    it('retorna um array não vazio services', async() => {
      const response = await productsService.deleteProducts(1);
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty
    })
  })

}) 