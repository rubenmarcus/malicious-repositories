const mongoose = require('mongoose');
const Schema = mongoose.Schema
const notificationSchema = new mongoose.Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: "admin",
    },
    notifications: [{
        notificationType: String, //order, question_on_product, answer_on_product, review
        notificationDetail: Object, //details in key/value
        hasRead: {
            type: Boolean,
            default: false
        },
        date: {
            type: Date
        },
        // hasSeen: {
        //     type: Boolean,
        //     default: false
        // }
    }],
    noOfUnseen: {
        type: Number,
        default: 0
    }
    
});
module.exports = mongoose.model('notification', notificationSchema);