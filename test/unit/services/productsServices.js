const sinon = require('sinon');
const {expect} = require ('chai');
const productsService = require('../../../services/productsServices')
const productsModel = require('../../../models/productsModel')

describe('Lista todos os produtos', () => {
  describe('lista produtos', () => {
    before(() => {
      const result = [[
          { id: 1, name: 'Martelo de Thor', quantity: 10 },
          { id: 2, name: 'Traje de encolhimento', quantity: 20 }
        ]]

      sinon.stub(productsModel, 'getAll').resolves(result)
    });
    after(() => {
      productsModel.getAll.restore();
    })

    it('lista os produtos', async() => {
      const response = await productsService.getAllProducts();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
  })
})

describe('lista produtos por id', () => {
  describe('se produto nao existir', () => {
    before(() => {
      const execute = [[]];

      sinon.stub(productsModel, 'getProductById').resolves(execute)
    });
    after(() => {
      productsModel.getProductById.restore();
    })
    it('retonar um array vazio', async() => {
      const response = await productsService.getProducts(1);
      expect(response).to.be.an('object');
      expect(response).to.has.keys('code', 'message')
    })
  })

  describe('lista o produto por id', () => {
    before(() => {
      const result = [[{id: 1, name:'traje homem de ferro', quantity:1}]];

      sinon.stub(productsModel, 'getProductById').resolves(result)
    });
    after(() => {
      productsModel.getProductById.restore();
    })

    it('retorna um objeto com as chaves id, name e quantity', async() => {
      const response = await productsService.getProducts();
      expect(response).to.be.an('object');
      expect(response).to.has.keys('id', 'name', 'quantity')
    })
  })
})

describe('adiciona produto no banco', () => {
  describe('cria o produto no banco', () => {
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
    it('cria o produto', async () => {
      const result = await productsService.createProducts({name: 'traje do homem de ferro', quantity: 1});

      expect(result).to.include.all.keys('id', 'name', 'quantity');
    });
  });

  describe('produto com mesmo nome', () => {

    before(async () => {  
      sinon.stub(productsModel, 'getAll').resolves([product]);
    });

    after(async () => {
      productsModel.getAll.restore();
    });

    it('produto ja existe', async () => {
       await expect(productsService.createProducts({name: product.name, quantity: 1}))
        .to.be.rejectedWith(new Error, 'Product already exists');
    });
  });
});
describe('Deleta um produto', ()=> {
  describe('caso o produto nao exista no banco', () => {
    before(() => {
      sinon.stub(productsModel, 'getProductById').resolves([{ code: 404, message: 'Product not found' }])
    });
    after(() => {
      productsModel.getProductById.restore();
    })

    it('retorna um objeto com as chaves code e message', async() => {
      const response = await productsService.deleteProducts(1);
      expect(response).to.be.an('object');
      expect(response).to.has.keys('code', 'message')
    })
  })

  describe('deleta um produto', () => {
    before(() => {
      sinon.stub(productsModel, 'getProductById').resolves([[123]])
      sinon.stub(productsModel, 'deleteProducts').resolves([[{affectedRows: 1}]])
    });
    after(() => {
      productsModel.getProductById.restore();
      productsModel.deleteProducts.restore();
    })
    it('retorna um array não vazio', async() => {
      const response = await productsService.deleteProducts(1);
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty
    })
  })

}) 