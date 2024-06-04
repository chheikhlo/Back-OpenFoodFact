const UserController = require("../controllers/UserControllers")
const routerUser = require('express').Router();

routerUser.post('/user/login', UserController.loginUser);

routerUser.post('/user/register', UserController.registerUser);

routerUser.delete('/delete/user/:id', UserController.deleteUsers);

routerUser.put('/put/user/:id', UserController.putUser);

routerUser.get('/users', UserController.getUsers);

routerUser.get('/users/:id', UserController.getUserById);

routerUser.post('/admin/add/product', UserController.addProduct);

routerUser.put('/admin/put/product/:id', UserController.putProduct);

routerUser.delete('/admin/delete/product/:id', UserController.deleteProduct);

routerUser.delete('/admin/delete/user/:id', UserController.deleteUserByAdmin);

routerUser.put('/admin/put/user/:id', UserController.putUserByAdmin);

module.exports = routerUser;
