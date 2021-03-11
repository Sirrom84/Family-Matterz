const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: String,
  dueDate: Date,
  completed: { type: Boolean, default: 'False' },
  creator: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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

module.exports = mongoose.model('Task', taskSchema);
