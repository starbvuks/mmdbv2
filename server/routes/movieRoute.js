const express = require("express");
const router = express.Router();

const movie = require("../controller/movieController");

router.get("/movies", movie.getAll);

module.exports = router;
