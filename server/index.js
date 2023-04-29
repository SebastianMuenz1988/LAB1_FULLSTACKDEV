const express = require("express");
const mongoose = require("mongoose");
const { join } = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
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

const corsOptions = {
  origin: "https://lab-1-deployment.web.app",
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", albumRoute);

// Basic route
// app.get("/", function (req, res) {
//   console.log(join(__dirname, "index.html"));
//   res.sendFile(join(__dirname, "index.html"));
// });

const port = process.env.PORT || 8080;
app.listen(8083, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
