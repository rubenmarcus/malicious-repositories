const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");
const Schema = mongoose.Schema;

//category
const categorySchema = new mongoose.Schema({
  systemName: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  displayName: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "productbrand",
  },
  brands: [
    {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  ],
  slug: {
    type: String,
  },
  isDisabled: {
    type: Date,
    default: null,
  },
});
categorySchema.plugin(URLSlugs("displayName", { field: "slug", update: true }));
module.exports = mongoose.model("category", categorySchema);
