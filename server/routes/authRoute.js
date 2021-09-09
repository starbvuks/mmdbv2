const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const User = require("../models/userModel");

const schema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string(),
  password: Joi.string().required().min(6),
});

router.post("/register", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists)
    return res.status(400).json({ message: "Email already exists" });

  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: hashPass,
  });
  try {
    const savedUser = await user.save();
    res.status(200).json({ message: savedUser });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/login", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "Email is not found" });

  const passwordValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordValid)
    return res.status(400).json({ message: "Invalid Password" });

  const token = jwt.sign({ _id: user.id }, process.env.SECRET, (err, token) => {
    if (err) throw err;
    return res.status(200).json({
      token: token,
      user: { id: user._id, email: user.email, username: user.username },
    });
  });
  res.header("token", token);
});

router.get("/", async (req, res) => {
  User.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: err.message || "something went wrong" });
    });
});

module.exports = router;
