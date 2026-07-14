const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const wishSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity: {
        type: Number,
    },
    isDeleted: {
        type: Date,
        default: null
    }
}, { timestamps: true });
module.exports = mongoose.model('wishlist', wishSchema);