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
        res.status(500).send({
            message: "There is an error",
            error: err.message
        })
    }
}

const newProduct = async (req, res, next) => {
    const {
        name,
        type,
        image,
        description
    } = req.body
    try {
        let newProduct = await Product.create({ name, type, image, description })
        res.status(200).send(newProduct)
    }
    catch (err) {
        res.status(400).send(err)
    }
}

const removeProduct = async (req, res, next) => {
    const name = req.body.name
    try {
        const findProduct = await Product.findOne({ name })
        // const findAgain = await Product.findOne(findProduct._id)
        // const removeProduct = await Product.remove({name})
        res.status(200).send({ message: `removed the following item: ${findProduct._id}` })
    }
    catch (err) {
        res.status(400).send(err)
    }
}

const editProduct = async (req, res, next) => {
    const {
        name,
        type,
        image,
        description
    } = req.body;

    try {
        const editProduct = await Product.findOneAndUpdate(
            { _id: name._id },
            {
                $set: {
                    _id,
                    name,
                    type,
                    image,
                    description
                }
            },
            { upsert: true, new: false, runValidators: true }
        )
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
