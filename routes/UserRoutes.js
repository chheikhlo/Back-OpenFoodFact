const UserController = require("../controllers/UserControllers")
const routerUser = require('express').Router();


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users management
 */

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: S'inscrire
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Utilisateur enregistré avec succès
 *       400:
 *         description: Erreur de validation des données
 */
routerUser.post('/user/register', UserController.registerUser);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Pour Connexion
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       401:
 *         description: Identifiants incorrects
 */
routerUser.post('/user/login', UserController.loginUser);

/**
 * @swagger
 * /user/add/product/cart:
 *   post:
 *     summary: Substituer un produit
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               productId:
 *                 type: string
 *             required:
 *               - userId
 *               - productId
 *     responses:
 *       200:
 *         description: Produit ajouté au panier
 *       400:
 *         description: Erreur de validation des données
 */
routerUser.post('/add/product/cart', UserController.addProductToHisBasket);

/**
 * @swagger
 * /user/delete/cart/{userId}/{productId}:
 *   delete:
 *     summary: Supprimer un produit substituer
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit
 *     responses:
 *       200:
 *         description: Produit supprimé du panier
 *       404:
 *         description: Produit ou utilisateur non trouvé
 */
routerUser.delete('/delete/cart/:userId/:productId', UserController.deleteCartUser);

/**
 * @swagger
 * /user/get/cart/{id}:
 *   get:
 *     summary: Retourner la liste des produits substituer par le user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Retourne la liste des produits substitués
 *       404:
 *         description: Utilisateur non trouvé
 */
routerUser.get('/user/get/cart/:id', UserController.getCartUser);

module.exports = routerUser;
