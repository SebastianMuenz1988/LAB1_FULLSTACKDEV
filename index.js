import express from "express";
import path from "path";
const app = express();

app.get("/", function (req, res) {
  res.status("200").sendFile(path.join(__dirname, "./index.html"));
});

const port = process.env.PORT || 6000;
const url = process.env.CONNECTION_URL;

app.listen(port, url, () => console.log(`Server is running @ Port: ${port} and URL: ${url}`));
