const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    comment: {
      type: String,
    },
    star: {
      type: Number,
      max: 5,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("reviews", reviewSchema);
