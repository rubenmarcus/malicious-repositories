const mongoose = require('mongoose');
const leadSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    isDeleted: {
        type: Date,
        default: null
    }
}, { timestamps: true });
module.exports = mongoose.model('lead', leadSchema);