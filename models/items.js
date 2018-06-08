const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    item_no: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
	 quantity: {
        type: String,
        required: true
    }

});

const Item = module.exports = mongoose.model('Item', ItemSchema);