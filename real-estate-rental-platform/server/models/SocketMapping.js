const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//later we have to do mapping through redis server

const socketMappingSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "admin",
  },
  socketId: String,
});
module.exports = mongoose.model("socketmapping", socketMappingSchema);
