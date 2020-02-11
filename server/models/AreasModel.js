const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaScehma = new Schema ({
    name: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now
    },
    countryId: {
        type: String,
        required: true
    }
})

module.exports = Area = mongoose.model('Area', AreaScehma);