const express = require('express');
const router = express.Router();
const Grocery = require('../DB/models/Grocery');

// Sends Grocery Items to Client
router.get('/', (req, res) => {
  Grocery.find({})
    .then((groceries) => {
      res.send(groceries);
    })
    .catch((err) => {
      console.log('Groceries Not Found', err);
    });
});

// Adds Grocery Item to DB
router.post('/', (req, res) => {
  const newItem = new Grocery(req.body);
  Grocery.create(newItem)
    .then((res) => {
      console.log('Item Added To DB');
    })
    .catch((err) => {
      console.log('Error Adding Item to DB', err);
    });
});

//Adds Ingredients to Grocery List DB
router.post('/ingredients', (req, res) => {
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

// Updates State of Grocery Item to Checked
router.put('/:id', (req, res) => {
  Grocery.findByIdAndUpdate(req.params.id, { checked: req.body.checked })
    .then(() => {
      console.log('Item Updated server Side');
    })
    .catch((err) => {
      console.log('Error Updating server Side'.err);
    });
});

// Deletes Grocery Item
router.delete('/:id', (req, res) => {
  Grocery.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Item Deleted');
    })
    .catch((err) => {
      console.log('Error Deleting Server Side', err);
    });
});

module.exports = router;
