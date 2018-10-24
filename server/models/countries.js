const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountriesSchema = new Schema({
    name: {
        type: String
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Products'
    }]
});




module.exports = Countries = mongoose.model('countries', CountriesSchema);