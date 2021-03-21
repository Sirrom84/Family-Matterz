const express = require('express');
const router = express.Router();
const Grocery = require('../DB/models/Grocery');

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
  const newItem = new Grocery(req.body);
  console.log(newItem);
  Grocery.create(newItem)
    .then((res) => {
      console.log('Item Added To DB');
    })
    .catch((err) => {
      console.log('Error Adding Item to DB', err);
    });
});

router.post('/ingredients', (req, res) => {
  console.log(req.body);
  req.body.map((item) => {
    let newItem = new Grocery({ title: item.name, category: item.aisle });
    Grocery.create(newItem)
      .then(() => {
        console.log('Ingredients Added to DB');
      })
      .catch((err) => {
        console.log('Error adding ingredients to DB', err);
      });
  });
});

router.put('/:id', (req, res) => {
  Grocery.findByIdAndUpdate(req.params.id, { checked: req.body.checked })
    .then(() => {
      console.log('Item Updated server Side');
    })
    .catch((err) => {
      console.log('Error Updating server Side'.err);
    });
});

router.delete('/:id', (req, res) => {
  Grocery.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Item Deleted');
    })
    .catch('Error Deleting Server Side', err);
});

module.exports = router;
