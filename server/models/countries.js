const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountriesSchema = new Schema({
    name: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }]
});

module.exports = Countries = mongoose.model('countries', CountriesSchema);

