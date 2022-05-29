const sinon = require('sinon');
const {expect} = require ('chai');
const productsService = require('../../../services/productsServices')
const productsController = require('../../../controllers/productsControllers');
const res = {}
const req = {}

describe('Lista todos os produtos', () => {
  describe('se o produto nao existir', () => {
    before(() => {
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()

    sinon.stub(productsService, 'getAllProducts').resolves({code: 404, message: 'produtos não cadastrados'})
  });

    after(() => {
      productsService.getAllProducts.restore();
    })

    // it('dispara mensagem de erro', async() => {
    //   await productsController.getAllProducts(req, res);

    //   expect(res.status.calledWith(404)).to.be.equal(true);
    //   expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
    // })
  })
  describe('lista todos os produtos', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getAllProducts').resolves([
        {
          "id": 1,
          "name": "Martelo de Thor",
          "quantity": 10
        },
        {
          "id": 2,
          "name": "Traje de encolhimento",
          "quantity": 20
        }
      ])
    });
    after(() => {
      productsService.getAllProducts.restore();
    })

    it('retorna o codigo 200 ', async() => {
      await productsController.getAllProducts(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true); 
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    })
  })
})
describe('lista produtos por id', () => {
  describe('lista produto por id', () => {
    before(() => {
      req.params = { id:1 }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns()

      sinon.stub(productsService, 'getProducts').resolves({
        "id": 1,
        "name": "Martelo de Thor",
        "quantity": 10
      })
    })

    after(() => {
      productsService.getProducts.restore()
    })

    it('retorna code 200', async() => {
      await productsController.getProducts(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    })
  })

  describe('caso o produto com este id nao exista', () => {
    before(() => {
      req.params = { id:999 }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns()

      sinon.stub(productsService, 'getProducts').resolves({ code: 404, message: `Product not found` })
    })

    after(() => {
      productsService.getProducts.restore()
    })

    it('retorna mensagem de erro', async() => {
      await productsController.getProducts(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
    })
  })
})