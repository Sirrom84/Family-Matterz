const express = require('express');
const router = express.Router();
const Survey = require('../DB/models/Survey');

router.get('/', (req, res) => {
  Survey.find({})
    .then((items) => {
      res.send(items);
    })
    .catch((err) => {
      console.log('Error Fetching Survey items');
    });
});

router.post('/', (req, res) => {
  const item = new Survey(req.body);
  console.log(item);
  Survey.create(item)
    .then(() => {
      console.log('Item Added to DB');
    })
    .catch((err) => {
      console.log('Error Adding to DB', err);
    });
});

router.put('/:id', (req, res) => {
  console.log(req.body);
  Survey.findByIdAndUpdate(req.params.id, {
    likes: req.body.likes,
    winner: req.body.winner,
  })
    .then((res) => {
      console.log('Edited Survey Item');
    })
    .catch((err) => {
      console.log('Error Editing Survey Item', err);
    });
});

module.exports = router;
