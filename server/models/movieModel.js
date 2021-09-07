var mongoose = require("mongoose");
// create an schema
var movieSchema = new mongoose.Schema({
  name: String,
  released: Number,
  genre: String,
  rating: Number,
});

module.exports = mongoose.model("Movies", movieSchema);
