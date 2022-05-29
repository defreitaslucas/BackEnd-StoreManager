const sinon = require('sinon');
const {expect} = require ('chai');
const salesController = require('../../../controllers/salesControllers')
const salesService = require('../../../services/salesServices');
const res = {}
const req = {}

describe('lista todas as vendas', () => {
  describe('lista todas as vendas', () => {

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getAllSales').resolves([
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
      salesService.getAllSales.restore();
    })

    it('é chamando o status 200 com um array como resposta ', async() => {
      await salesController.getAllSales(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true); 
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    })
  })
})

describe(' lista vendas por id', () => {
  describe('uma ou mais vendas sao encontradas', () => {

    before(() => {
      req.params = { id:1}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns()

      sinon.stub(salesService, 'getSales').resolves([[
        {
          "date": "2022-05-27T18:18:08.000Z",
          "quantity": 5,
          "productId": 1
        },
        {
          "date": "2022-05-27T18:18:08.000Z",
          "quantity": 10,
          "productId": 2
        }
      ]])
    })

    after(() => {
      salesService.getSales.restore()
    })

    it('é chamado status 200 com um array no json', async() => {
      await salesController.getSales(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    })
  })

  describe('quando nao ha vendas', () => {
    before(() => {
      req.params = { id:999 }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns()

      sinon.stub(salesService, 'getSales').resolves({ code: 404, message: `Product not found` })
    })

    after(() => {
      salesService.getSales.restore()
    })

    it('mensagem de erro', async() => {
      await salesController.getSales(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
      expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
    })
  })
})