const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminFileSchema = new mongoose.Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "admin",
    },
    fileUri: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("adminfile", adminFileSchema);
