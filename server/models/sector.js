const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const neighborhoodSchema = require('./neighborhood').schema;
const hubSchema = require('./hub').schema;

const sectorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    neighborhoods: [neighborhoodSchema],
    hubs: [hubSchema]
});

module.exports = mongoose.model('Sector', sectorSchema);