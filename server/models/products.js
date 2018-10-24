const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,

    },
    name: {
        type: string
    },
    type: {
        type: string
    },

    description: {
        type: string
    }

});



module.exports = Product = mongoose.model('product', ProductSchema)