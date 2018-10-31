const Product = require('../models/products');
const Country = require('../models/countries');

const searchCategory = async (req, res) => {
    const searchTerm = req.params;

    try {
        const product = await Product.findOne(searchTerm);
        const country = await Country.findOne(searchTerm);

        if (product === null && country === null) {
            res.status(404).send({ category: 'invalid', message: 'Could not find country or product' });
        } else if (product === null) {
            res.status(200).send({ category: 'country' });
        } else {
            res.status(200).send({ category: 'product' });
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: 'Could not find product or country' })
    }
}

module.exports = { searchCategory }