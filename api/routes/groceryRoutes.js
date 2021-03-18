const express = require('express');
const router = express.Router();
const Groceries = require('../DB/models/Grocery');

router.get('/', (req, res) => {
  Grocery.find({})
    .then((groceries) => {
      res.send(groceries);
    })
    .catch((err) => {
      console.log('Groceries Not Found', err);
    });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const item = req.body;
});

module.exports = router;
