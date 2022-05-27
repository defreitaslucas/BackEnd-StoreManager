// const {expect} = require('chai');
// const sinon = require('sinon');
// const productsServices = require('../../../services/productsServices');
// const productsControllers = require('../../../controllers/productsControllers');

// describe('teste controllers', () => {
//   const req = {};
//   const res = {};

//   const mocka = [{
//     id: 1,
//     name: "produto",
//     quantity: 1,
//   }]

//   before(()=> {
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns();

//     sinon.stub(productsServices, 'getAllProducts').resolves(mocka);
//   });

//   after(() => {
//     productsServices.getAllProducts.restore();
//   });

//   it('retorna todos os produtos com status 200 quando sucesso', async () => {
//     await productsControllers.getAllProducts(req, res);

//     expect(res.status.calledWith(200)).to.be.true;
//   });

//   describe('getProducts controller', () => {
//     const req = {};
//     const res = {};
  
//     req.params = { id: 300 };
  
//     const mocka = {
//       statusCode: 404,
//       message: "Product not found"
//     }
  
//     before(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
  
//       sinon.stub(productsServices, 'getProducts').resolves(mocka);
//     });
  
//     after(() => {
//       productsServices.getProducts.restore();
//     })
  
//     it('Retorna status 404, e messagem Product not found ', async () => {
//       await productsControllers.getProducts(req, res);
  
//       expect(res.status.calledWith(404)).to.be.deep.equal(true);
//       expect(res.json.calledWith({ message: 'Product not found' })).to.be.deep.equal(true);
//     })
//   })
// })
