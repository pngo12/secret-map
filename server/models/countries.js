const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CountriesSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }]
});

module.exports = Countries = mongoose.model('countries', CountriesSchema);

