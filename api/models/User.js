const mongose = require('mongose');

const userSchema = new mongose.Schema({
  firstName: String,
  lastName: String,
  family: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Family',
    },
    familyName: String,
  },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
