const ProductController = require('../controllers/ProductController');
const routerProduct = require('express').Router();


routerProduct.get('/', ProductController.getProducts);

routerProduct.get('/category/:category', ProductController.getProductsByCategory);

routerProduct.get('/code/:code', ProductController.getProductByCode);

routerProduct.get('/list/categories', ProductController.getCategories);

module.exports = routerProduct;
