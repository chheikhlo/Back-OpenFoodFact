const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  code: { type: String, required: true, unique: true }
});

module.exports = Food = mongoose.model('Food', foodSchema, 'food');
