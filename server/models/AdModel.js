const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    subCategoryId: {
        type: String, 
        required: true
    },
    areaId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    filePath: {
        type: String
    }
})

module.exports = Ad = mongoose.model('AdSchema', AdSchema);
