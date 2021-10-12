const Movies = require("../models/movieModel");

module.exports.getAll = (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;

  console.log(page, limit);
  Movies.find({})
    .then((data) => {
      if (page && limit) {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const resultPage = data.splice(startIndex, endIndex);
        res.status(200).json(resultPage);
      } else {
        res.status(200).json(data);
      }
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
        .status(400)
        .json({ message: err.message || "cant find entry" });
    });
};
