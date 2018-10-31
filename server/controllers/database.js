const CountryDatabase = require('../models/countrydatabase')

const getCountryFromDatabase = async (req, res) => {

    try {
        const country = await CountryDatabase.findOne(req.params);
        if (country) {
            res.status(200).send(country);
        } else {
            res.status(400).send({ success: false, message: 'Could not locate country' })
        }
    }
    catch (err) {
        res.status(404).send({ success: false, message: err.message });
    }
}

module.exports = {
    getCountryFromDatabase,
}

