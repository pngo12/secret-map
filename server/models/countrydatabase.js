const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountryDatabaseSchema = new Schema({
    Continent: String,
    Countries: [String]
});

module.exports = CountryDatabase = mongoose.model('countryDatabase', CountryDatabaseSchema);

