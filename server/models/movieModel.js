var mongoose = require("mongoose");
var db = require("../server");
// create an schema
var movieSchema = new mongoose.Schema({
  name: String,
  released: Number,
  genre: String,
  rating: Number,
});

module.exports = mongoose.model("Movies", movieSchema);
