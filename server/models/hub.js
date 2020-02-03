const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hubSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    neighborhoodId: { type: String },
    sectorId: { type: String },
    cityId: { type: String }
});

module.exports = mongoose.model('Hub', hubSchema);