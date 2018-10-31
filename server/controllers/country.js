const Product = require('../models/products');
const Country = require('../models/countries');

const getCountryAll = async (req, res) => {
    try {
        // Get all countries in DB, and populate the products array
        const getCountryAll = await Country.find().populate('products', 'name type description');
        if (getCountryAll.length > 0) {
            res.status(200).send(getCountryAll);
        } else {
            res.status(404).send({ success: false, message: 'Could not get get all countries' })
        }
    }
    catch (err) {
        res.status(404).send(err.message)
    }
}

const findOneCountry = async (req, res) => {
    let name = req.params;
    try {
        const findOne = await Country.findOne(name).populate('products', 'name type description');
        if (findOne) {
            res.status(200).send(findOne)
        } else {
            res.status(400).send({ message: 'Sorry could not locate country' })
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: err.message })
    }
}

module.exports = {
    getCountryAll,
    findOneCountry,
}