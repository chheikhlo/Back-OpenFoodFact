const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  product_name: String,
  categories: String,
  allergens_tags: [String],
  code: String,
  ingredients_text: String,
  stores_tags: [String],
  image_front_small_url: String,
  link_page_on_openfoodfacts: String
});

module.exports = Food = mongoose.model('Food', foodSchema, 'food');
