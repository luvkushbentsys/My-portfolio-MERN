const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  massege: String,
});
module.exports = mongoose.model("userData", UserSchema);
