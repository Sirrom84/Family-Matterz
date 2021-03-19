const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  title: String,
  isLiked: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  winner: { type: Boolean, default: false },
});

module.exports = mongoose.model('Survey', surveySchema);
