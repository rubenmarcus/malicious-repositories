const mongoose = require("mongoose");
const Schema = mongoose.Schema
const warehouseSchema = new mongoose.Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: "admin",
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    address: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    phoneno: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    city: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    isVerified: {
        type: Date,//as we may need verified date
        default: null
    }
}, { timestamps: true });

module.exports = mongoose.model("adminwarehouse", warehouseSchema);