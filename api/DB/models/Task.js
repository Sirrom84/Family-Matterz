const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	creator: String,
	taskid: String,
	title: String,
	completed: {type: Boolean, default: false},
	completedby: String,
	key: String,
	points: Number,
	created: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Task", taskSchema);
