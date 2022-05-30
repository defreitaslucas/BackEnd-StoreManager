const sinon = require('sinon');
const {expect} = require ('chai');
const salesService = require('../../../services/salesServices');
const salesModel = require('../../../models/salesModel');
const productsModel = require('../../../models/productsModel');


describe('lista vendas services', () => {
  describe('lista vendas services', () => {
    before(() => {
      const result = [[
        {
          "saleId": 1,
          "date": "2022-04-05T04:54:29.000Z",
          "productId": 1,
          "quantity": 1
        },
        {
          "saleId": 1,
          "date": "2021-01-01T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        }
      ]]

      sinon.stub(salesModel, 'getAll').resolves(result)
    });
    after(() => {
      salesModel.getAll.restore();
    })

    it('lista vendas services', async() => {
      const response = await salesService.getAllSales();
      expect(response).to.be.an('array');
      expect(response).to.not.be.empty;
    })
  })
})

describe('lista vendas por id services', () => {
  describe('caso nao exista a venda pelo id informado services', () => {
    before(() => {
      const execute = [{code: 404, message: 'Sale not found'}];

      sinon.stub(salesModel, 'getSalesById').resolves(execute)
    });
    after(() => {
      salesModel.getSalesById.restore();
    })
    it('retona mensagem de erro services', async() => {
      const [response] = await salesService.getSales(1);
      expect(response).to.be.an('object');
      expect(response).to.has.keys('code', 'message')
    })
  })

  describe('lista a venda por id services', () => {
    before(() => {
      const result = [[
        {
          "date": "2022-04-05T04:54:29.000Z",
          "productId": 1,
          "quantity": 1
        },
        {
          "date": "2021-01-01T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        }
      ],[]];

      sinon.stub(salesModel, 'getSalesById').resolves(result)
    });
    after(() => {
      salesModel.getSalesById.restore();
    })

    it('retorna um array com as vendas pelo id services', async() => {
      const [response] = await salesService.getSales();
      expect(response).to.be.an('array');
      response.forEach((item) => expect(item).to.has.keys('date', 'productId', 'quantity'))

    })
  })
})
describe('Cria vendas services', () => {
  describe('Cria vendas services', () => {
    before(async () => {
      sinon.stub(salesModel, 'createSale').resolves({ insertId: 1 });
      sinon.stub(productsModel, 'getAll').resolves([{ id: 1, quantity: 3 }])
    });

    after(async () => {
      salesModel.createSale.restore();
      productsModel.getAll.restore();
    });

    it('Retorna um objeto services', async () => {
      const result = await salesService.createSale([{ productId: 1, quantity: 2 }]);

      expect(result).to.be.an('object');
    });

    it('venda criada com sucesso services', async () => {
      const result = await salesService.createSale([{ productId: 1, quantity: 2 }]);

      expect(result).to.include.all.keys('id', 'itemsSold');
    });
  });
});

describe('Deleta venda services', () => {
  describe('deleta venda services', () => {
    before(async () => {
      sinon.stub(salesModel, 'deleteSales').resolves({ affectedRows: 1 });
    });

    after(async () => {
      salesModel.deleteSales.restore();
    });

    it('Retorna um objeto com a chave affectedRows e o valor 1 services', async () => {
      const result = await salesModel.deleteSales(1);

      expect(result).to.be.an('object');
      expect(result.affectedRows).to.equal(1);
    });
  });

  // describe('caso nao ache o id da venda services', () => {
  //   before(async () => {
  //     sinon.stub(salesModel, 'getSalesById').resolves([]);;
  //   });

  //   after(async () => {
  //     salesModel.getSalesById.restore();
  //   });

  //   it('gera mensagem de erro services', async () => {
  //     await expect(salesService.deleteSales(1)).to.be.rejectedWith(new Error, 'Sale not found');
  //   });
  // });
}); 