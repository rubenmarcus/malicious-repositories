const mongoose = require('mongoose');
const suggestKeywordSchema = mongoose.Schema({
    keyword: {
        type: String,
        unique: true
    },
    isDeleted: {
        type: Date,
        default: null
    }
}, { timestamps: true });
module.exports = mongoose.model('suggestkeyword', suggestKeywordSchema);