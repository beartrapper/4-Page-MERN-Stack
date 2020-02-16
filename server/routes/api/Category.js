const express = require('express');
const router = express.Router();

const Category = require('../../models/CatergoryModel');


//get All
router.get('/', (req, res) => {
    Category.find()
    .sort({date: -1})
    .then(cats => {
        res.json(cats)
    })
});

//get specific
router.get('/:id', (req, res) => {
    Category.find({areaId: req.params.id})
    .then(cats => {
        res.json(cats)
    })
});


//post new one
router.post('/:areaId', (req, res) => {
    const obj = new Category({
        name: req.body.name,
        areaId: req.params.areaId
    });
    obj.save().then((resp) => {
        res.json(resp)
    }).catch(err => {console.log('err is here');res.json(err)})

});


// /delete
router.post('/:catId/delete', (req, res) => {
    Category.deleteOne({
        _id: req.params.catId})
    
    .then((resp) => res.json(resp))
    .catch(err => res.json(err))
});
module.exports = router;