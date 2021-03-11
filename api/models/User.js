const mongoose = require('mongose');

const userSchema = new mongose.Schema({
  firstName: String,
  lastName: String,
  password: String,
  family: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Family',
    },
  },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
