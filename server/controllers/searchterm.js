const searchTerm = require('../searchterms')

const findSearchTerm = (req, res) => {
    if (searchTerm.country) {
        console.log(searchTerm.Country);
        // res.status(200).send();
    } else if (searchTerm.products) {
        console.log(searchTerm.products);
        // res.status(200).send();
    }
}

module.exports = { findSearchTerm }