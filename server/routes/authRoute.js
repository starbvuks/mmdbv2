const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const RegisterSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().required().min(6),
});

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

router.post("/register", async (req, res) => {
  const { error } = RegisterSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    email: req.body.name,
    username: req.body.username,
    password: hashPass,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: savedUser });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = LoginSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ emai: req.body.email });
  if (!user) return res.status(400).send("Email already exists");

  const passwordValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordValid) return res.status(400).send("Invalid Password");

  res.send("Login Successful");
});

module.exports = router;
