const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        
    }
})



module.exports = Products = mongoose.model('products', ProductSchema);