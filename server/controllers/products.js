const Product = require('../models/products')


const getProduct = async (req, res) => {
    try {
        let product = await Product.find().exec();
        if (product === null || product === undefined) {
            res.status(400).send({ message: "There are no products here!!" });
        }
        res.status(200).send({ product, message: "Here are your products" })
    }
    catch (err) {
        res.status(500).send({
            message: "There is an error",
            error: err.message
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            countries: req.body.countries
        })
        product.save()
            (product => res.json(product))
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
}

module.exports = { getProduct, createProduct }