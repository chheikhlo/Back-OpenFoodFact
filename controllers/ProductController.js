const Food = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Food.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProductsById = (req, res) => {
  Food.find({ "_id": req.params.id })
      .then(product => {
          res.status(200).json(product)
          console.log(product)
      })
      .catch(err => {
          res.status(404).json({ notFound: 'Produit non trouvé' })
      })
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

const getProductsByProductIdAndCategory = async (req, res) => {
  const { id, category } = req.params;

  try {
    const mainProduct = await Food.findById(id);
    if (!mainProduct) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }

    const products = await Food.find({ categories: { $regex: category, $options: 'i' } });

    console.log(products)

    const mainProductAllergenCount = mainProduct.allergens_tags ? mainProduct.allergens_tags.length : 0;

    const filteredProducts = products.filter(product => {
      const productAllergenCount = product.allergens_tags ? product.allergens_tags.length : 0;
      return productAllergenCount < mainProductAllergenCount;
    });

    if (filteredProducts.length === 0) {
      res.json([mainProduct]);
    } else {
      res.json(filteredProducts);
    }
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


module.exports = { getProducts, getProductsByCategory, getProductsById, getProductByCode, getCategories, getProductsByProductIdAndCategory }
