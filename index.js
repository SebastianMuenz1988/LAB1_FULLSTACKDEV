import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";
import albumRoute from "./routes/album.js";
dotenv.config();
// import bodyParser from "body-parser";
// const bodyParser = require(“body-parser”)

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// DB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

// Middleware
app.use(express.json()); // body parser before passing to route handler
app.use("/api", albumRoute);
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Basic coute
app.get("/", function (req, res) {
  console.log(join(__dirname, "index.html"));
  res.sendFile(join(__dirname, "index.html"));
});

const port = process.env.PORT || 6000;
const url = process.env.CONNECTION_URL;

app.listen(3000, () => console.log(`Server is running @ Port: ${port} and URL: ${url}`));
