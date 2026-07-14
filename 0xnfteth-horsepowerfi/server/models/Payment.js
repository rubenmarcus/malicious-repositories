const mongoose = require("mongoose");
const Schema = mongoose.Schema
const paymentSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: "order",
        required: true
    },
    method: {
        type: String,
        enum: ['Cash on Delivery','manual']//manual ==> bank or manual esewa..
    },
    shippingCharge: {
        type: Number,
    },
    amount: {
        type: Number,
    },
    returnedAmount: {
        type: Number,
        default: null
    },
    transactionCode: {
        type: String,
        required: true
    },
    from:{
        type:Number,
        max: 9999999999 //!esewa && receiverNumber
    },
    isDeleted: {
        type: Date,
        default: null
    }

}, { timestamps: true });

module.exports = mongoose.model("payment", paymentSchema);