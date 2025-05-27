const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forYouSchema = new mongoose.Schema({
  forYou: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        unique: true,
      },
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: "product",
          unique: true,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("minedproduct", forYouSchema);
