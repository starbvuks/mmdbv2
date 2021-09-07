const express = require("express");
const router = express.Router();

const movie = require("../controller/movieController");

router.get("/movies", movie.getAll);
router.get("/movies/:id", movie.getOne);

module.exports = router;
