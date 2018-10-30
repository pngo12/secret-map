const Product = require('../models/products');
const Country = require('../models/countries')

const getCountryAll = async (req, res, next) => {
    try {
        // Get all countries in DB, grab the ID of the product, and populate the products array
        const getCountryAll = await Country.find().populate('products', 'name');
        res.status(200).send(getCountryAll);
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

const findOneCountry = async (req, res, next) => {
    let name = req.params;
    try {
        const findOne = await Country.find(name).populate('products');
        if (findOne.length <= 0) {
            res.status(400).send({ message: 'Sorry could not locate country' })
        } else {
            res.status(200).send(...findOne)
        }
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

// const addProductToCountry = async (req, res, next) => {

//     const countryName = req.body.countryName;
//     const productName = req.body.productName;

//     try {
//         const product = await Product.findOne({ name: productName });
//         const country = await Country.findOne({ name: countryName });
//         // Find the country, and push a new product to the product's array
//         const addProduct = await Country.findOneAndUpdate(
//             { _id: country._id },
//             { $push: { products: product._id } },
//             { upsert: true, new: true, runValidators: true }
//         )
//         res.status(200).send(addProduct);
//     }
//     catch (err) {
//         res.status(500).send(err.message);
//     }
// }

// const removeProductFromCountry = async (req, res, next) => {

//     const countryName = req.body.countryName;
//     const productName = req.body.productName;

//     try {
//         const product = await Product.findOne({ name: productName })
//         const country = await Country.findOne({ name: countryName })
//         // Find the country, and remove a product from the product's array
//         const removeProduct = await Country.findOneAndUpdate(
//             { _id: country._id },
//             { $pull: { products: product._id } },
//             { upsert: false, new: true, runValidators: true }
//         )
//         res.status(200).res.send(removeProduct)
//     }
//     catch (err) {
//         res.status(500).send(err.message)
//     }
// }

module.exports = {
    getCountryAll,
    findOneCountry,
    // removeProductFromCountry,
    // addProductToCountry,
}