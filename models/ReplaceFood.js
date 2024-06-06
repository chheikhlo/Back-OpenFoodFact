const mongoose = require('mongoose');

const replaceFoodSchema = new mongoose.Schema({
    userId: String,
    productId: String
})

module.exports = ReplaceFood = mongoose.model('ReplaceFood', replaceFoodSchema, 'replacedfood');
