const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const movieRoute = require("./routes/movieRoute");
const authRoute = require("./routes/authRoute");

// mongosh "mongodb+srv://mmdb.r1xr8.mongodb.net/mmdb" --username me --password *StrbvkS346
dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://me:bL284UNe9XcqLWiO@mmdb.r1xr8.mongodb.net/mmdb?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4510;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
});

app.use("/", movieRoute);
app.get("/", movieRoute);

app.use("/auth", authRoute);
app.get("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`connected to ${PORT}`);
});
