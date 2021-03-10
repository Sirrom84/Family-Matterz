const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: String,
  owner: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
  },
  dueDate: Date,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
