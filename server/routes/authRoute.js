const router = require("express").Router();
const User = require("../models/userModel");
const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

router.post("/register", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    email: req.body.name,
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
