const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//cart model
const cartSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    quantity: {
      type: Number,
    },
    productAttributes: {
      type: String,
    },
    isDeleted: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("cart", cartSchema);
