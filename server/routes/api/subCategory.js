const express = require('express');
const router = express.Router();
const sub = require('../../models/subCategory');


//get All
router.get('/', (req, res) => {
    sub.find()
    .sort({date: -1})
    .then(subs => {
        res.json(subs)
    })
});

//get specific
router.get('/:id', (req, res) => {
    sub.find({categoryId: req.params.id})
    .then(sub => {
        res.json(sub)
    })
});

//post new one
router.post('/:catId', (req, res) => {
    const obj = new sub({
        name: req.body.name,
        categoryId: req.params.catId,
    });
    obj.save().then((resp) => {
        res.json(resp)
    }).catch(err => {console.log('err is here');res.json(err)})

});

// /delete
router.post('/:adId/delete', (req, res) => {
    sub.deleteOne({
        _id: req.params.adId})
    
    .then((resp) => res.json(resp))
    .catch(err => res.json(err))
});
module.exports = router;