const mongoose = require("mongoose");
const { districts } = require("../middleware/common");
//
const districtSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      enum: districts,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("district", districtSchema);
