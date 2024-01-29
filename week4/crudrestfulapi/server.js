const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const siswa = require("./server/api/siswa");

app.use("/siswa", siswa);

const port = process.env.NODEJS_PORT || 8080;

app.get("/", (req, res) => {
  res.send("Succesfull Response");
});

app.listen(port, console.log("start port"));
