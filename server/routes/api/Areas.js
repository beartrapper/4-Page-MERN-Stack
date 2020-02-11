const express = require('express');
const router = express.Router();

const Area = require('../../models/AreasModel');

router.get('/', (req, res) => {
    Area.find()
    .sort({date: -1})
    .then(areas => {
        res.json(areas)
    })
});

router.post('/:countryId', (req, res) => {
    const obj = new Area({
        name: req.body.name,
        countryId: req.params.countryId
    });
    obj.save().then((resp) => {
        res.json(resp)
    }).catch(err => res.json(err))

});

module.exports = router;