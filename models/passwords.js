const mongoose = require("mongoose");

const passwordSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  password: String,
});
module.exports = mongoose.model("Passwords", passwordSchema);
