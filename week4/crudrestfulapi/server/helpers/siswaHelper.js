const _ = require("lodash");
const fs = require("fs");
const { json } = require("express");

const getSiswaList = async () => {
  try {
    const data = fs.readFileSync("./assets/siswa.json", "utf-8");
    const jsonData = JSON.parse(data);
    return Promise.resolve(jsonData);
  } catch (error) {
    console.log(error, "<<<<< ERROR GET SISWA");
  }
};



module.exports = {
  getSiswaList,
  
};
