const mongoose = require("mongoose");
const Schema = mongoose.Schema
const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point']
    },
    coordinates: {
        type: [Number]
    }
});

const addressSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    label: {
        type: String,
        trim: true,
        enum:['home','office','other']
    },
    region: {//pradesh
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    area: {//tole,area name
        type: String,
        trim: true,
    },
    address: {//street level address
        type: String,
        trim: true,
    },
    geolocation: {
        type: pointSchema,
    },
    phoneno: {
        type: String,
        trim: true,
        max: 9999999999,
    },
    isActive:{
        type: Date,
        default: null
    }
}, { timestamps: true });
addressSchema.index({ geolocation: "2dsphere" });

module.exports = mongoose.model("address", addressSchema);