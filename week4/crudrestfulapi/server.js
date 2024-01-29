const express = require("express");

const app = express();

const siswa = require("./server/api/siswa");

app.use("/siswa", siswa);

const port = process.env.NODEJS_PORT || 8080;

app.get("/", (req, res) => {
  res.send("Succesfull Response");
});

app.listen(port, console.log("start port"));
