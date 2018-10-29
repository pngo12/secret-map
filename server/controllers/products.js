const Product = require('../models/products')

const getProduct = async (req, res, next) => {
    try {
        let product = await Product.find();
        if (product.length <= 0) {
            res.status(400).send({ message: 'There was an error finding products' });
        }
        res.status(200).send(product)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

const newProduct = async (req, res, next) => {
    const { name, type, image, description } = req.body
    try {
        let newProduct = await Product.create({ name, type, image, description })
        res.status(200).send(newProduct)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

const removeProduct = async (req, res, next) => {
    const name = req.body.name
    try {
        const removeProduct = await Product.findOneAndDelete({ name })
        res.status(200).send({ message: `removed the following item: ${removeProduct}` })
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

const editProduct = async (req, res, next) => {
    // Next up for this method
    // Check for if the value of original name is !== undefined
    // If it's not, dont update the name,
    // if the value of 'original' name is !== undefined,
    // Then update to the value of the new name
    const { name, type, image, description } = req.body;

    try {
        const editProduct = await Product.findOneAndUpdate(
            { name },
            {
                $set: {
                    name,
                    type,
                    image,
                    description
                }
            },
            { upsert: false, new: true, runValidators: true }
        )
        console.log(editProduct)
        res.status(200).send(editProduct);
    }
    catch (err) {
        res.status(400).send(err);
    }
}

// Use the below method to upload data, remove once done
// const upload = (req, res) => {
//     Country.insertMany(data, function (error, docs) {
//         if (error) {
//             console.log(error)
//         } else {
//             res.send(docs);
//         }
//     })
// }

module.exports = {
    getProduct,
    newProduct,
    editProduct,
    removeProduct
}
