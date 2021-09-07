const router = require("express").Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
