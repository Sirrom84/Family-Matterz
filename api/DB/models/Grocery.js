const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  checked: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Grocery', grocerySchema);
