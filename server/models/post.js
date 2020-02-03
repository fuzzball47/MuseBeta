const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        requried: true,
        trim: true
    },
    credibility: {
        type: Number
    },
    isActive: { type: Boolean },
    userId: { type: String },
    hubId: { type: String },
    neighborhoodId: { type: String },
    sectorId: { type: String },
    cityId: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);