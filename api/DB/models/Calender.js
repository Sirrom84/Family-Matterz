const mongoose = require("mongoose");

const calenderSchema = new mongoose.Schema({
  listOfItems: {
    _id: String,
    name: String,
    startDateTime: String,
    endDateTime: String,
    classes: String,
  },
});

module.exports = mongoose.model("Calender", calenderSchema);
