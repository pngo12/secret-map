const express = require('express');
const app = express();
const Product = require('../models/products')


const getProduct = async (req,res) => {
    try{
    let product = await Product.find().exec();
    if(product === null || product === undefined) {
        res.status(400).send({ message: "There are no products here!!"});
    }
        res.status(200).send({ product, message: "Here are your products" })
}  
    catch(err) {
        res.status(500).send({
            message: "There is an error",
            error: err.message
        })
    }
}

module.exports = getProduct