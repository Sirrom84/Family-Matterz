const mongoose = require('mongoose');

const calanderSchema = new mongoose.Schema({
  appointement: {
    title: String,
    body: String,
    Date: Date,
    creator: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  },
  family: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Family',
    },
  },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Calander', calanderSchema);
