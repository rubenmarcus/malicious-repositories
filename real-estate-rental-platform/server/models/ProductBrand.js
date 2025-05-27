const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const brandSchema = new mongoose.Schema({
  brandName: {
    type: String,
  },
  systemName: {
    type: String,
    unique: true,
  },
  slug: {
    type: String,
  },
});
brandSchema.plugin(URLSlugs("brandName", { field: "slug", update: true }));
module.exports = mongoose.model("productbrand", brandSchema);
