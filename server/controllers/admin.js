const Product = require('../models/products');

const getCountryByProduct = async (req, res) => {
    try {
        let countries = await Product.findById(req.params.id).exec();
        if(countries.length === 0 || countries === null || countries === undefined) {
            res.status(400).json({message: "There are no products with that name"});
        }
            res.status(200).json({ countries, message: "Here are the countries based on the product" })
    } 
    catch(err) {
        res.status(500).json({
            message: "There is an error with the database!",
            error: err.message
        })
    }
}

const getProductByCountry = async (req,res) => {
    try {
        let products = await Country.findById(req.params.id).exec();
        if(products.length === 0 || products === null || products === undefined) {
            res.status(400).json({ message: "The country was incorrect. Please try again"})
        }
            res.status(200).json({ products, message: "Here are the products associated with this country"})
    }   catch(err) {
        res.status(500).json({ Error: err.message })
    }
}

const addProductToCountry = async (req, res) => {
    let product = req.body;
        try {
            let newProductToCountry = await Country.create(product);
            res.status(200).json({ newProductToCountry, message: "Added to country"});
        }   catch(err) {
            res.status(500).json({ Error: err.message})
        }
}

const deleteProductFromCountry = async (req, res) => {
    try {
        let deletedProduct = await Country.findByIdAndRemove(req.params.id).exec();
        res.status(200).json({ deletedProduct, message: "You have removed this product from the country"});
    if(index == undefined) {
        res.status(404).json({ message: "something went wrong"})
    }
    }catch (err) {
        res.status(500).json({ Error: err.message })
    }
}

module.exports = { getCountryByProduct, getProductByCountry, addProductToCountry, deleteProductFromCountry }