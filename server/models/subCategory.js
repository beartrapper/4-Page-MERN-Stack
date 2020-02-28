const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    categoryId: {
        type: String, 
        required: true
    }
})

module.exports = subCategory = mongoose.model('subCategory', subCategorySchema);
