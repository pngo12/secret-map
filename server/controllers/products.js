const express = require('express');
const app = express();
const Products = require('../models/products')


const getProducts = (req,res) => {
    Products.find()
    .then(products => {
        if(!products) {
            return res.status(404).json({message: 'Could not find products'})
        }
        res.status(200).json(products)
    })
    .catch(err => {
        res.status(404).json(err)
    })
}


module.exports = getProducts