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
        const product = await Product.findOne(name).populate('countries', 'name');
        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).send({ success: false, message: 'Sorry could not locate product' });
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: err.message });
    }
}

const newProduct = async (req, res) => {

    const { name, type, description, countryName } = req.body;

    try {
        const product = await Product.findOne({ name });
        const country = await Country.findOne({ name: countryName });

        // If the product exists in DB, let the user know
        if (product) {
            res.status(418).send({ message: 'Product already exists in database' });
        }

        // If the country exists in DB, create a new product and eachother's ID
        // in their respective arrays
        if (country) {
            const newProduct = await Product.create({ name, type, description })
            const addCountryToProduct = await Product.findOneAndUpdate(
                { _id: newProduct._id },
                { $push: { countries: country._id } },
                { upsert: false, new: true, runValidators: true }
            );
            const addProductToCountry = await Country.findOneAndUpdate(
                { _id: country._id },
                { $push: { products: newProduct._id } },
                { upsert: false, new: true, runValidators: true }
            );
            res.status(200).send({ message: `Created: ${newProduct.name}` })
        }

        // If the country does not exist, create it in the DB
        // and add it eachothers ID to their respective arrays
        if (country === null) {
            const newCountry = await Country.create({ name: countryName });
            const newProduct = await Product.create({ name, type, description });

            const addCountryToProduct = await Product.findOneAndUpdate(
                { _id: newProduct._id },
                { $push: { countries: newCountry._id } },
                { upsert: false, new: true, runValidators: true }
            );
            const addProductToCountry = await Country.findOneAndUpdate(
                { _id: newCountry._id },
                { $push: { products: newProduct._id } },
                { upsert: false, new: true, runValidators: true }
            );
            res.status(200).send({ message: `Created ${newProduct.name}` })
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
        res.status(200).send({ message: `Added ${addProduct.name} to ${addCountry.name}` })
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

    const id = req.params.id;

    try {
        const removeProduct = await Product.findByIdAndDelete({ _id: id });
        if (removeProduct === null) {
            res.status(404).send({ message: 'Could not find product' });
        } else {
            res.status(200).send(removeProduct);
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: err.message });
    }
}

const editProduct = async (req, res) => {

    const { name, type, image, description, id } = req.body;

    try {
        const editProduct = await Product.findByIdAndUpdate(
            { _id: id },
            { $set: { name, type, image, description } },
            { upsert: false, new: true, runValidators: true }
        );
        if (editProduct) {
            res.status(200).send(editProduct);
        } else {
            res.status(400).send({ success: false, message: 'Could not find product' })
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
