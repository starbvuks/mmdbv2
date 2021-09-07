const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
