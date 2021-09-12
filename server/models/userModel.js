const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
  favorites: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
