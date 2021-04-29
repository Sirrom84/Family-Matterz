const express = require('express');
const router = express.Router();
const Survey = require('../DB/models/Survey');

// Sends Items from DB to Client
router.get('/', (req, res) => {
  Survey.find({})
    .then((items) => {
      res.send(items);
    })
    .catch((err) => {
      console.log('Error Fetching Survey items');
    });
});

// Creates New Survey Item in Database
router.post('/', (req, res) => {
  const item = new Survey(req.body);
  Survey.create(item)
    .then(() => {
      console.log('Item Added to DB');
    })
    .catch((err) => {
      console.log('Error Adding to DB', err);
    });
});

// Updates Survey Items like count and Winner boolean
router.put('/:id', (req, res) => {
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

// Survey Reset
router.delete('/', (req, res) => {
  Survey.deleteMany({})
    .then((res) => {
      console.log('Survey Collection Reset');
    })
    .catch((err) => {
      console.log('Error Resetting Survey', err);
    });
});

module.exports = router;
