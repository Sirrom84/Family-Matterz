const mongoose = require("mongoose");

const calenderSchema = new mongoose.Schema({
  text: String,
  employeeID: Number,
  startDate: String,
  endDate: String,
  description: String,
});

module.exports = mongoose.model("Calender", calenderSchema);
