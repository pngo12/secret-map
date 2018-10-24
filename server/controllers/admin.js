const Product = require('../models/products');

const getCountryByProduct = async (req, res) => {
    try {
        let countries = await Product.find().exec();
        if( countries === null || countries === undefined) {
            res.status(400).send({message: "There are no products with that name"});
        }
            res.status(200).send({ countries, message: "Here are the countries based on the product" })
    } 
    catch(err) {
        res.status(500).send({
            message: "There is an error with the database!",
            error: err.message
        })
    }
}

const getProductByCountry = async (req,res) => {
    try {
        let products = await Country.findById(req.params.id).exec();
        if( products === null || products === undefined) {
            res.status(400).send({ message: "The country was incorrect. Please try again"})
        }
            res.status(200).send({ products, message: "Here are the products associated with this country"})
    }   catch(err) {
        res.status(500).send({ Error: err.message })
    }
}

const addProductToCountry = async (req, res) => {
    let product = req.body;
        try {
            let newProductToCountry = await Country.create(product);
            res.status(200).send({ newProductToCountry, message: "Added to country"});
        }   catch(err) {
            res.status(500).send({ Error: err.message})
        }
}

const deleteProductFromCountry = async (req, res) => {
    try {
        let deletedProduct = await Country.findByIdAndRemove(req.params.id).exec();
        res.status(200).send({ deletedProduct, message: "You have removed this product from the country"});
    if(index == undefined) {
        res.status(404).send({ message: "something went wrong"})
    }
    }catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

module.exports = { getCountryByProduct, getProductByCountry, addProductToCountry, deleteProductFromCountry }