const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: String,
    image: String,
    description: String,
    countries: [{ type: Schema.Types.ObjectId, ref: 'countries' }]
});

module.exports = Products = mongoose.model('products', ProductSchema);