const UserController = require("../controllers/UserControllers")
const routerUser = require('express').Router();

routerUser.post('/login', UserController.loginUser);

routerUser.post('/add/product/cart', UserController.addProductToHisBasket);

routerUser.delete('/delete/cart/:userId/:productId', UserController.deleteCartUser);

routerUser.post('/user/register', UserController.registerUser);

routerUser.get('/user/get/cart/:id', UserController.getCartUser);

module.exports = routerUser;
