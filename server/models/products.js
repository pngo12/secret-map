const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    type: String,
    image: String,
    description: String,
});

module.exports = Product = mongoose.model('products', ProductSchema)