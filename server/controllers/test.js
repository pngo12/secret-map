const Product = require('../models/products');
const Country = require('../models/countries');

const testRoute = async (req, res) => {
    const searchterm = req.params;
    // console.log(searchterm)
    try {
        const product = await Product.find()
        console.log(product)
        // const productSearch = await Product.findOne({ name: teeth })
        // const countrySearch = await Country.findOne({ name: test })
        // console.log(productSearch)
        // console.log(countrySearch)
        res.status(200).send(product)
    }
    catch (err) {
        res.status(404).send({ success: false, message: 'Could not find product or country' })
    }
}

module.exports = { testRoute }