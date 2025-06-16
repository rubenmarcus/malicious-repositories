const mongoose = require('mongoose');
const Schema = mongoose.Schema
const productImageSchema = mongoose.Schema({
    thumbnail: {
        type: String
    },
    medium: {
        type: String
    },
    large: {
        type:String
    },
    productLink:{
        type: Schema.Types.ObjectId,
        ref: "product",
        default: null
    }
}, { timestamps: true });
module.exports = mongoose.model('productimages', productImageSchema);