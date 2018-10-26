const Product = require('../models/products');
const Country = require('../models/countries')

const getCountryAll = async (req, res) => {
    try {
        Country.find()
            .populate('products').exec((err, name) => {
                console.log("Populated name: " + name)

                if (name === null || name === undefined) {
                    res.status(400).send({ message: "There are no countries here!!" });
                }
                res.status(200).send(name)
            })

    }
    catch (err) {
        res.status(500).send({
            message: "There is an error",
            error: err.message
        })
    }
}

const findOneCountry = (req, res) => {
    let name = req.params
    console.log(name)
        Country.findOne(name , function(err,docs){
            res.status(200).json(docs)
        }).exec()
    //   catch(err) {
    //     res.status(500).send({
    //         message: 'There was an error',
    //         error: err.message
    //     })
    // }
}

const addProductToCountry = async (req, res) => {
    try {
        const product = await Product({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            type: req.body.type
        })
        let newProductToCountry = await Product.create(product)
        .then(Country.isNew = false)
        .then(Country.update({},{$set: {}}))
        res.status(200).json({ newProductToCountry, message: "Added to country" });
    } catch (err) {
        res.status(500).json({ Error: err.message })
    }
}

const deleteProductFromCountry = async (req, res) => {
    try {
        let deletedProduct = await Country.findByIdAndRemove(req.params.id).exec();
        res.status(200).send({ deletedProduct, message: "You have removed this product from the country" });
        if (index == undefined) {
            res.status(404).send({ message: "something went wrong" })
        }
    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

module.exports = {
    getCountryAll,
    deleteProductFromCountry,
    addProductToCountry,
    findOneCountry
}