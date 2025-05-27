const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = mongoose.Schema({
  //we need user ref in order to create accessToken of that user only
  // user: {
  //     type: Schema.Types.ObjectId,
  //     refPath: "sysUsers",
  // },
  refreshToken: {
    type: String,
    default: "",
  },
  userIP: {
    type: String,
  },
  // expires: {
  //     type : Date
  // },
  // sysUsers: {
  //     type: String,
  //     enum: ['user', 'admin','dispatcher']
  // },
});
module.exports = mongoose.model("refreshtoken", tokenSchema);
