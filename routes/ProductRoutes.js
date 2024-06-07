const ProductController = require('../controllers/ProductController');
const routerProduct = require('express').Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products management
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Liste des produits
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Retourne la liste des produits
 */
routerProduct.get('/', ProductController.getProducts);

/**
 * @swagger
 * /products/product-details/{id}:
 *   get:
 *     summary: Les détails sur un produit de par son Id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit
 *     responses:
 *       200:
 *         description: Retourne les détails du produit
 */
routerProduct.get('/product-details/:id', ProductController.getProductsById);

/**
 * @swagger
 * /products/category/{category}:
 *   get:
 *     summary: Liste des produits par catégorie
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Catégorie des produits
 *     responses:
 *       200:
 *         description: Retourne la liste des produits par catégorie
 */
routerProduct.get('/category/:category', ProductController.getProductsByCategory);

/**
 * @swagger
 * /products/code/{code}:
 *   get:
 *     summary: Un produit de par son code bar
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: Code bar du produit
 *     responses:
 *       200:
 *         description: Retourne le produit correspondant au code bar
 */
routerProduct.get('/code/:code', ProductController.getProductByCode);

/**
 * @swagger
 * /products/list/categories:
 *   get:
 *     summary: Liste des catégories
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Retourne la liste des catégories
 */
routerProduct.get('/list/categories', ProductController.getCategories);

/**
 * @swagger
 * /products/{id}/{category}:
 *   get:
 *     summary: Liste des produits par Id et Catégorie
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Catégorie des produits
 *     responses:
 *       200:
 *         description: Retourne la liste des produits par Id et Catégorie
 */
routerProduct.get('/:id/:category', ProductController.getProductsByProductIdAndCategory);

module.exports = routerProduct;
