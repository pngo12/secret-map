const Product = require('../models/products');
const Country = require('../models/countries');

const getProduct = async (req, res, next) => {
    try {
        let product = await Product.find().populate('countries', 'name');
        if (product.length <= 0) {
            res.status(400).send({ success: false, message: 'There was an error finding products' });
        }
        res.status(200).send({ success: true, product });
    }
    catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
}

const newProduct = async (req, res, next) => {
    const { name, type, image, description } = req.body;
    try {
        let newProduct = await Product.create({ name, type, image, description });
        res.status(200).send({ success: true, newProduct });
    }
    catch (err) {
        res.status(400).send({ success: true, message: err.message });
    }
}

const findOneProduct = async (req, res, next) => {
    let name = req.params;
    try {
        const findOne = await Product.find(name).populate('countries', 'name');
        if (findOne.length <= 0) {
            res.status(400).send({ success: false, message: 'Sorry could not locate country' });
        } else {
            res.status(200).send({ success: true, ...findOne });
        }
    }
    catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
}

const addCountryToProduct = async (req, res, next) => {

    const countryName = req.body.countryName;
    const productName = req.body.productName

    try {
        const product = await Product.findOne({ name: productName });
        const country = await Country.findOne({ name: countryName });

        // Find the product, push a new country to the product array
        const addCountry = await Product.findOneAndUpdate(
            { _id: product._id },
            { $push: { countries: country._id } },
            { upsert: false, new: true, runValidators: true }
        );
        const addProduct = await Country.findOneAndUpdate(
            { _id: country._id },
            { $push: { products: product._id } },
            { upsert: false, new: true, runValidators: true }
        );
        res.status(200).send({ success: true, message: `Added ${addProduct.name} to ${addCountry.name}` })
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const removeCountryFromProduct = async (req, res, next) => {

    const countryName = req.body.countryName;
    const productName = req.body.productName;

    try {

        const country = await Country.findOne({ name: countryName });
        const product = await Product.findOne({ name: productName });

        // Find the product, remove a country from the product array
        const removeProduct = await Country.findOneAndUpdate(
            { _id: country._id },
            { $pull: { products: product._id } },
            { upsert: false, new: true, runValidators: true }
        );
        const removeCountry = await Product.findOneAndUpdate(
            { _id: product._id },
            { $pull: { countries: country._id } },
            { upsert: false, new: true, runValidators: true }
        );
        res.status(200).send({ success: true, message: `Removed ${removeProduct.name} from ${removeCountry.name}` })
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const removeProduct = async (req, res, next) => {
    const name = req.body.name
    try {
        const removeProduct = await Product.findOneAndDelete({ name })
        res.status(200).send({ success: true, message: `Removed the following item: ${removeProduct}` })
    }
    catch (err) {
        res.status(400).send({ success: false, message: err.message })
    }
}

const editProduct = async (req, res, next) => {
    // Next up for this method
    // Check for if the value of original name is !== undefined
    // If it's not, dont update the name,
    // if the value of 'original' name is !== undefined,
    // Then update to the value of the new name
    const { name, type, image, description } = req.body;

    try {
        const editProduct = await Product.findOneAndUpdate(
            { name },
            { $set: { name, type, image, description } },
            { upsert: false, new: true, runValidators: true }
        );
        res.status(200).send({success: true, editProduct});
    }
    catch (err) {
        res.status(400).send({success: false, message: message.err});
    }
}

// Use the below method to upload data, remove once done
// const upload = (req, res) => {
//     Country.insertMany(data, function (error, docs) {
//         if (error) {
//             console.log(error)
//         } else {
//             res.send(docs);
//         }
//     })
// }

module.exports = {
    getProduct,
    findOneProduct,
    addCountryToProduct,
    removeCountryFromProduct,
    newProduct,
    editProduct,
    removeProduct,
}
