const express = require('express');
const router = express.Router();

const Country = require('../../models/CountriesModel');

router.get('/', (req, res) => {
    Country.find()
    .sort({date: -1})
    .then(countries => {
        res.json(countries)
    })
});

module.exports = router;