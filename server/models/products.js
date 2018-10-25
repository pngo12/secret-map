const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: String,
    type: String,
    image: String,
    description: String,
});

module.exports = Product = mongoose.model('product', ProductSchema)