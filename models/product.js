// Dependencies
const mongoose = require('mongoose');

// shortcut variable 
const Schema = mongoose.Schema;

// define Schema
const productSchema = new Schema({
    name: {type: String, required: true}, 
    description: {type: String, required: true},
    category: {type: String, required: true},
    img: String,
    price: {type: Number, min:0},
    qty: {type: Number, min:0}
});

module.exports = mongoose.model('Product', productSchema);
