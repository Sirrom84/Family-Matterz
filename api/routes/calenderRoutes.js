const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Calender = require("../DB/models/Calender");

// Query mongo for all Calender items
// will dry up after but just for set up

// return the Calender items array
router.get("/items", (req, res, next) => {
  Calender.find({}, (err, items) => {
    err ? console.log(err) : res.send(items);
  });
});

module.exports = router;
