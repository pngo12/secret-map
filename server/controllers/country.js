const Product = require('../models/products');
const Country = require('../models/countries')

const getCountryAll = async (req, res) => {
    try {
        // Get all countries in DB, grab the ID of the product, and populate the products array
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
        const findOne = await Country.find(name).populate('products', 'name type description');
        console.log(findOne)
        if (findOne.length > 0) {
            res.status(200).send(...findOne)
        } else {
            res.status(400).send({ message: 'Sorry could not locate country' })
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: err.message })
    }
}

// const addProductToCountry = async (req, res) => {

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

// const removeProductFromCountry = async (req, res) => {

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