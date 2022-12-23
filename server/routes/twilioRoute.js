const express = require("express");
const router = express.Router();
const app = express();

const accountSid = "AC5e708b967d52f6f20bad1a1189d4c105";
const authToken = "d228a07413000a990099d39dc93cabb6";
const client = require("twilio")(accountSid, authToken);

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.post("/", (req, res) => {
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      body: "hey",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+919533586416",
    })
    .then(() => {
      console.log(body);
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

module.exports = router;
