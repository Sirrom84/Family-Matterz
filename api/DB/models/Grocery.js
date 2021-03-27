const { formatters } = require('debug');
const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  item: String,
  category: String,
  price: Number,
  family: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Family',
    },
  },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Grocery', grocerySchema);
