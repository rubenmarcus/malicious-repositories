const mongoose = require("mongoose");
const Schema = mongoose.Schema
const qnaSchema = new mongoose.Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    qna: [{
        question: {
            type: String
        },
        questionby: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        questionedDate:{
            type: Date
        },
        answer: {
            type: String
        },
        answerby: {
            type: Schema.Types.ObjectId,
            ref: "admin",
        },
        answeredDate: {
            type: Date
        },
        isDeleted: {
            type: Date,
            default: null
        }
    }]
});

module.exports = mongoose.model("qna", qnaSchema);