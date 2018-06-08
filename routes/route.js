const express = require('express');
const router = express.Router();

const Item = require('../models/items');


//retrieve items
router.get('/items', (req, res, next) => {
    Item.find(function (err, items) {
        res.json(items);
    });
});

//retrieve items by id
router.get('/items/:id', (req, res, next) => {
    Item.find({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});


//add items
router.post('/items', (req, res, next) => {
    let newItem = new Item({
		item_no: req.body.item_no,
        item_name: req.body.item_name,
        price: req.body.price,
        quantity: req.body.quantity

    });

    newItem.save((err, item) => {
        if (err) {
            res.json({ msg: 'failed to add item' });
        }
        else {
            res.json({ msg: 'item added successfully' });
        }
    });
});

//delete items
router.delete('/items/:id', (req, res, next) => {
    Item.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});


module.exports = router;