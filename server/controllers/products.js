const Product = require('../models/products')
const Country = require('../models/countries')
const { data } = require('../data/countries')

const getProduct = async (req, res) => {
    try {
        let product = await Product.find().exec();
        if (product === null || product === undefined) {
            res.status(400).send({ message: "There are no products here!!" });
        }
        res.status(200).send(product)
    }
    catch (err) {
        res.status(500).send({
            message: "There is an error",
            error: err.message
        })
    }
}

// const createProduct = (req, res) => {
//     // try {
//     const product = new Product({
//         name: req.body.name,
//         image: req.body.image,
//         description: req.body.description,
//         countries: req.body.countryId
//     })
//     Product.create(product)
//     res.status(200).send(product)
//     // }
//     // .catch (err) {
//     //     res.status(404).send({ error: err.message })
//     // }
// }

// const findProduct = async (req, res) => {
//     try {
//         const product = await Product.find()
//             .populate('countries', 'name').exec()
//         console.log(product)
//         res.status(200).json(product)
//     }
//     catch (err) {
//         res.status(404).send({ message: 'Could not find product' })
//     }
// }


// Use the below method to upload data, remove once done
const upload = (req, res) => {
    Country.insertMany(data, function (error, docs) {
        if (error) {
            console.log(error)
        } else {
            res.send(docs);
        }
    })
}


module.exports = {
    getProduct,
    // createProduct
    upload
}
