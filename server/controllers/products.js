const Product = require('../models/products');
const Country = require('../models/countries');

const getProduct = async (req, res) => {
    try {
        const product = await Product.find().populate('countries', 'name');
        if (product.length > 0) {
            res.status(200).send(product);
        } else {
            res.status(400).send({ success: false, message: 'There was an error finding products' });
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: err.message });
    }
}

const findOneProduct = async (req, res) => {
    let name = req.params;
    try {
        const findOne = await Product.find(name).populate('countries', 'name');
        if (findOne.length > 0) {
            res.status(200).send(findOne);
        } else {
            res.status(404).send({ success: false, message: 'Sorry could not locate country' });
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: err.message });
    }
}

const newProduct = async (req, res) => {
    const { name, type, image, description } = req.body;
    try {
        const newProduct = await Product.create({ name, type, image, description });
        if (newProduct) {
            res.status(200).send(newProduct);
        } else {
            res.status(400).send({ success: false, message: 'Could not create product' })
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: err.message });
    }
}

const addCountryToProduct = async (req, res) => {

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
        res.status(404).send(err.message);
    }
}

const removeCountryFromProduct = async (req, res) => {

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
        res.status(200).send({ success: true, message: `Removed ${removeProduct.name} from ${removeCountry.name}` });
    }
    catch (err) {
        res.status(404).send(err.message);
    }
}

const removeProduct = async (req, res) => {
    const name = req.body.name
    try {
        const removeProduct = await Product.findOneAndDelete({ name });
        if (removeProduct) {
            res.status(200).send({ success: true, message: `Removed the following item: ${removeProduct}` });
        } else {
            res.status(400).send({ success: false, message: 'Could not remove product' })
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: err.message });
    }
}

const editProduct = async (req, res) => {

    const { name, newName, type, image, description } = req.body;

    try {
        if (newName == '') {
            const editProduct = await Product.findOneAndUpdate(
                { name },
                { $set: { name, type, image, description } },
                { upsert: false, new: true, runValidators: true }
            );
            if (editProduct) {
                res.status(200).send(editProduct);
            } else {
                res.status(400).send({ success: false, message: 'Could not find product' })
            }
        } else {
            const editProductWithNewName = await Product.findOneAndUpdate(
                { name },
                { $set: { name: newName, type, image, description } },
                { upsert: false, new: true, runValidators: true }
            );
            if (editProductWithNewName) {
                res.status(200).send(editProductWithNewName);
            } else {
                res.status(400).send({ success: false, message: 'Could not find product' })
            }
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: message.err });
    }
}

module.exports = {
    getProduct,
    findOneProduct,
    addCountryToProduct,
    removeCountryFromProduct,
    newProduct,
    editProduct,
    removeProduct,
}
