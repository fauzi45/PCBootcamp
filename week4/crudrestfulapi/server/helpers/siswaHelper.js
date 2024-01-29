const _ = require("lodash");
const fs = require("fs");
const path = require("path");

const dataPath = (__dirname, "./assets/siswa.json");


const getSiswaList = async () => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    const jsonData = JSON.parse(data);
    return Promise.resolve(jsonData);
  } catch (error) {
    console.log(error, "<<<<< ERROR GET SISWA");
  }
};

const getSiswaDetail = async (id) => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    const jsonData = JSON.parse(data);
    console.log(jsonData)
    const siswaDetail = jsonData.find((siswa) => String(siswa.id) === id);
    if (!siswaDetail) {
      console.log("Data siswa tidak ditemukan <<<<<");
    }
    return Promise.resolve(siswaDetail);
  } catch (error) {
    console.log("Gagal mendapatkan data siswa");
  }
};



module.exports = {
  getSiswaList,
  getSiswaDetail,
};
