const mongoose = require('mongose');

// the name of the schema is declared  and instansitized here
const familySchema = new mongoose.Schema({
  admin: {
    firstName: String,
    lastName: String,
  },
  familyMembers: [],
  familyName: String,
  password: String,
  created: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Family', familySchema);
