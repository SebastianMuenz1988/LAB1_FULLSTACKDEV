const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const mongoose = require("mongoose");
const { join } = require("path");
const dotenv = require("dotenv");
// const cors = require("cors");
const albumRoute = require("./routes/album");

dotenv.config();

const app = express();

// DB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

// Middleware
// app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
  } else {
    next();
  }
});

app.use(express.json());
app.use("/api", albumRoute);

// Basic route
// app.get("/", function (req, res) {
//   console.log(join(__dirname, "index.html"));
//   res.sendFile(join(__dirname, "index.html"));
// });

exports.app = functions.https.onRequest(app);

module.exports = app;
