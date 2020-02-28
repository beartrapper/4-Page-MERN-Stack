const express = require('express');
const router = express.Router();
const Ad = require('../../models/AdModel');


//get All
router.get('/', (req, res) => {
    Ad.find()
    .sort({date: -1})
    .then(ads => {
        res.json(ads)
    })
});

//get specific
router.get('/:id', (req, res) => {
    Ad.find({categoryId: req.params.id})
    .then(ad => {
        res.json(ad)
    })
});


//post new one
router.post('/:subId/:areaId', (req, res) => {
    console.log(req.body)
    const obj = new Ad({
        name: req.body.name,
        subCategoryId: req.params.subId,
        areaId: req.params.areaId,
        description: req.body.desc,
        contact: req.body.contact,
        filePath: req.body.filePath
    });
    obj.save().then((resp) => {
        res.json(resp)
    }).catch(err => {console.log('err is here');res.json(err)})

});


// /delete
router.post('/:adId/delete', (req, res) => {
    Ad.deleteOne({
        _id: req.params.adId})
    
    .then((resp) => res.json(resp))
    .catch(err => res.json(err))
});
module.exports = router;