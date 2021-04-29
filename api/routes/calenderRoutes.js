const express = require('express');
const router = express.Router();
// const mongoose = require("mongoose");
const Calender = require('../DB/models/Calender');

router.put('/update', (req, res, next) => {
  const query = {
    text: req.body.text,
    employeeID: req.body.employeeID,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description,
  };

  const filter = { _id: req.body._id };

  const result = Calender.updateOne(filter, query)
    .then(() => {
      console.log(' You Have Updated a Document');
    })
    .catch((err) => {
      console.log('Hey you have an error:', err);
    });
});

// route to delete an appointment from the data base
router.put('/delete', (req, res, next) => {
  const query = { _id: req.body._id };
  const result = Calender.deleteOne(query)
    .then(() => {
      console.log(' You Have Deleted a Document');
    })
    .catch((err) => {
      console.log('Hey you have an error:', err);
    });
});

// route to create a new appointment
router.put('/create', (req, res, next) => {
  const query = {
    text: req.body.text,
    employeeID: req.body.employeeID,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description,
  };

  const result = Calender.create(query)
    .then(() => {
      console.log(' You Have Inserted A Document');
    })
    .catch((err) => {
      console.log('Hey you have an error:', err);
    });
});

// this is the route for all initial calender items
router.get('/', (req, res, next) => {
  Calender.find({}, (err, items) => {
    err ? console.log(err) : res.send(items);
  });
});

module.exports = router;
