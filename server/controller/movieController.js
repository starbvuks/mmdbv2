const Movies = require("../models/movieModel");

module.exports.getAll = (req, res) => {
  Movies.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: err.message || "something went wrong" });
    });
};

module.exports.getOne = (req, res) => {
  Movies.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return res
        .stauts(400)
        .json({ message: err.message || "cant find entry" });
    });
};
