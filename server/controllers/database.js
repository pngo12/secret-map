const CountryDatabase = require('../models/countrydatabase')

const getCountryFromDatabase = async (req, res, next) => {

    try {
        const country = await CountryDatabase.findOne(req.params);
        console.log(country)
        if (country) {
            res.status(200).send(country);
        }
    }
    catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
}

module.exports = {
    getCountryFromDatabase,
}