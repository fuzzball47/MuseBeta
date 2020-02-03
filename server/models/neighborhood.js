const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hubSchema = require('./hub').schema;

const districtSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    hubs: [hubSchema]
});

module.exports = mongoose.model('District', districtSchema);