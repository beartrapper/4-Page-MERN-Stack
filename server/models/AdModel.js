const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema ({
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
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
})

module.exports = Ad = mongoose.model('AdSchema', AdSchema);