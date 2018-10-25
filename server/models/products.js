const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    countries: [{
        type: String
    }]
})



module.exports = Product = mongoose.model('product', ProductSchema)