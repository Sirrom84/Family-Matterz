const mongoose = require('mongoose');

// the name of the schema is declared  and instansitized here
const familySchema = new mongoose.Schema({
  familyName: String,
  familyMembers: [
    {
      firstname: String,
      lastname: String,
      avatar: { data: Buffer, contentType: String },
    },
  ],
  created: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Family', familySchema);
