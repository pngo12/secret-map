const Product = require('../models/products');
const Country = require('../models/countries')

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

// const getProduct = async (req, res) => {
//     try {
//         let product = await Product.find().exec();
//         if (product === null || product === undefined) {
//             res.status(400).send({ message: "There are no products here!!" });
//         }
//         res.status(200).send({ product, message: "Here are your products" })
//     }
//     catch (err) {
//         res.status(500).send({
//             message: "There is an error",
//             error: err.message
//         })
//     }
// }


const getCountry = async (req, res) => {
    try {
        let country = await Country.find().exec();
        if (country === null || country === undefined) {
            res.status(400).send({ message: "There are no countries here!!" });
        }
        res.status(200).send( country )
    }
    catch (err) {
        res.status(500).send({
            message: "There is an error",
            error: err.message
        })
    }
}

// const getProductByCountry = async (req,res) => {
//     try {
//         let products = await Country.findById(req.params.id).exec();
//         if( products === null || products === undefined) {
//             res.status(400).send({ message: "The country was incorrect. Please try again"})
//         }
//             res.status(200).send({ products, message: "Here are the products associated with this country"})
//     }   catch(err) {
//         res.status(500).send({ Error: err.message })
//     }
// }

const createCountry = async (req, res) => {
    try {
        const country = await Country({
            name: req.body.name,
        })
        Country.create(country)
        res.status(200).send(country)
            // (country => res.json(country))
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
}

// const addProductToCountry = async (req, res) => {
//     try {
//         const product = await Country({
            
//         })
//         const {name, image, description} = req.body;
//             let newProductToCountry = await Country.create(product);
//             res.status(200).json({ newProductToCountry, message: "Added to country"});
//         }   catch(err) {
//             res.status(500).json({ Error: err.message})
//         }
// }

const deleteProduct = async (req, res) => {
    try {
        let deletedProduct = await Product.findByIdAndRemove(req.params.id).exec();
        res.status(200).send({ deletedProduct, message: "DELETED" });
        if(index == undefined) {
            res.status(404).send({ message: "Please try again" })
        } 
    }catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

// const deleteProductFromCountry = async (req, res) => {
//     try {
//         let deletedProduct = await Country.findByIdAndRemove(req.params.id).exec();
//         res.status(200).send({ deletedProduct, message: "You have removed this product from the country"});
//     if(index == undefined) {
//         res.status(404).send({ message: "something went wrong"})
//     }
//     }catch (err) {
//         res.status(500).send({ Error: err.message })
//     }
// }

module.exports = { getCountryByProduct, getCountry,  createCountry, deleteProduct }