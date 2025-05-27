const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bannerSchema = mongoose.Schema(
  {
    bannerPhoto: {
      type: String,
    },
    link: {
      type: String,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    isDeleted: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("banner", bannerSchema);
