const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const app = express();

const movieRoute = require("./routes/movieRoute");
const authRoute = require("./routes/authRoute");

const accountSid = "AC5e708b967d52f6f20bad1a1189d4c105";
const authToken = "d228a07413000a990099d39dc93cabb6";
const client = require("twilio")(accountSid, authToken);

// mongosh "mongodb+srv://mmdb.r1xr8.mongodb.net/mmdb" --username me --password *bL284UNe9XcqLWiO
dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://me:bL284UNe9XcqLWiO@mmdb.r1xr8.mongodb.net/mmdb?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4510;

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(express.urlencoded({ extended: false }));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
});

app.use("/", movieRoute);
app.get("/", movieRoute);

app.use("/auth", authRoute);
app.get("/auth", authRoute);

app.post("/test", (req, res) => {
  console.log(req.body.body);
  client.messages
    .create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+919533586416",
      body: `id: ${req.body.body._id}\nemail: ${req.body.body.email}\nusername: ${req.body.body.username}\n`,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(PORT, () => {
  console.log(`connected to ${PORT}`);
});
