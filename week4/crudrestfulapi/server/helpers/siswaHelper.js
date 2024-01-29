const _ = require("lodash");
const fs = require("fs");

const dataPath = (__dirname, "./assets/siswa.json");

const getSiswaList = async () => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    const jsonData = JSON.parse(data);
    return Promise.resolve(jsonData);
  } catch (error) {
    console.log(error, "<<<<< ERROR GET SISWA");
    throw error; 
  }
};

const getSiswaDetail = async (id) => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    const jsonData = JSON.parse(data);
    const siswaDetail = jsonData.filter((siswa) => String(siswa.id) === id);
    if (siswaDetail.length === 0) {
      throw new Error("Data siswa tidak ditemukan");
    }
    return Promise.resolve(siswaDetail);
  } catch (error) {
    console.log("Gagal mendapatkan data siswa");
    throw error; 
  }
};

const DeleteSiswa = async (id) => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    const jsonData = JSON.parse(data);
    const deleteSiswa = jsonData.filter((siswa) => String(siswa.id) !== id);
    fs.writeFileSync(dataPath, JSON.stringify(deleteSiswa));
    return Promise.resolve(deleteSiswa);
  } catch (error) {
    console.log("Gagal mendapatkan data siswa");
    throw error; 
  }
};

const createSiswa = async (datas) => {
  try {
    const { name, kelas, jenisKelamin } = datas;
    const data = fs.readFileSync(dataPath, "utf-8");
    const jsonData = JSON.parse(data);
    const createData = {
      id: jsonData.length + 1,
      name,
      kelas,
      jenisKelamin,
    };

    jsonData.push(createData);
    fs.writeFileSync(dataPath, JSON.stringify(jsonData));
    return createData;
  } catch (error) {
    console.log("gagal menambahkan error");
    throw error; 
  }
};

const updateSiswa = async (id, updatedDatas) => {
  try {
    const { name, kelas, jenisKelamin } = updatedDatas;
    const data = fs.readFileSync(dataPath, "utf-8");
    const jsonData = JSON.parse(data);
    const index = jsonData.findIndex((siswa) => String(siswa.id) === id);
    if (index === -1) {
      throw new Error("Siswa dengan ID tersebut tidak ditemukan");
    }

    const updatedSiswa = {
      ...jsonData[index],
      name: name || jsonData[index].name,
      kelas: kelas || jsonData[index].kelas,
      jenisKelamin: jenisKelamin || jsonData[index].jenisKelamin,
    };

    jsonData[index] = updatedSiswa;
    fs.writeFileSync(dataPath, JSON.stringify(jsonData));
    return updatedSiswa;
  } catch (error) {
    console.log("gagal menambahkan error");
    throw error; 
  }
};

module.exports = {
  getSiswaList,
  getSiswaDetail,
  DeleteSiswa,
  createSiswa,
  updateSiswa,
};
