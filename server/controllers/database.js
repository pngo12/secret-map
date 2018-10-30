const CountryDatabase = require('../models/countrydatabase')

const getCountryFromDatabase = async (req, res, next) => {
    const continent = req.params
    console.log(continent)
    try {
        const country = await CountryDatabase.find();
        console.log(country)
        // if (country.length > 0) {
        //     res.status(200).send({ success: true, country });
        // }
        res.status(200).send({ success: true, country });
    }
    catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
}

module.exports = {
    getCountryFromDatabase
}