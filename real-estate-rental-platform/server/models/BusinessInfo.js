const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const businessSchema = new mongoose.Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "admin",
      required: true,
    },
    ownerName: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    address: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    city: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    citizenshipNumber: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    businessRegisterNumber: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    citizenshipFront: {
      type: Schema.Types.ObjectId,
      ref: "adminfile",
    },
    citizenshipBack: {
      type: Schema.Types.ObjectId,
      ref: "adminfile",
    },
    businessLicence: {
      type: Schema.Types.ObjectId,
      ref: "adminfile",
    },
    isVerified: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("businessinfo", businessSchema);
