const Movies = require("../models/movieModel");

module.exports.getAll = (req, res) => {
  Movies.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return res
        .staus(400)
        .json({ message: err.message || "something went wrong" });
    });
};
