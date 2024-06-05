const Food = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Food.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const products = await Food.find({ categories: { $regex: category, $options: 'i' } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const products = await Food.find();
    const categoriesSet = new Set();
    products.forEach(product => {
      const categories = product.categories.split(',').map(category => category.trim());
      categories.forEach(category => categoriesSet.add(category));
    });
    const categoriesArray = Array.from(categoriesSet);
    res.json(categoriesArray);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProductsByCategory };

const getProductByCode = async (req, res) => {
  const code = req.params.code;
  try {
    const product = await Food.findOne({ code: code });
    if (!product) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { getProducts, getProductsByCategory, getProductByCode, getCategories }
