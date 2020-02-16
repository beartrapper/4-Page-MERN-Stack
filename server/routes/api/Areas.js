const express = require('express');
const router = express.Router();

const Area = require('../../models/AreasModel');


//get All
router.get('/', (req, res) => {
    Area.find()
    .sort({date: -1})
    .then(areas => {
        res.json(areas)
    })
});

//get specific
router.get('/:id', (req, res) => {
    Area.find({countryId: req.params.id})
    // .sort({date: -1})
    .then(areas => {
        res.json(areas)
    })
});


//post new one
router.post('/:countryId', (req, res) => {
    const obj = new Area({
        name: req.body.name,
        countryId: req.params.countryId
    });
    obj.save().then((resp) => {
        res.json(resp)
    }).catch(err => res.json(err))

});


// /delete
router.post('/:areaId/delete', (req, res) => {
    Area.deleteOne({
        _id: req.params.areaId})
    
    .then((resp) => res.json(resp))
    .catch(err => res.json(err))
});
module.exports = router;