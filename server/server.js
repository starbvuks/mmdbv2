const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const movieRouter = require("./routes/movieRoute");

// mongosh "mongodb+srv://mmdb.r1xr8.mongodb.net/mmdb" --username me --password *StrbvkS346


const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT || 4510;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  `mongodb+srv://me:*StrbvkS346@mmdb.r1xr8.mongodb.net/mmdb?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);

app.use("/", movieRouter);

// app.use("/", function (req, res) {
//   res.send("hello world");
// });

app.listen(PORT, () => {
  console.log(`connected to ${PORT}`);
});
