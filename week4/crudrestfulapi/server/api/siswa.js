const Router = require("express").Router();

const { request } = require("express");
const SiswaHelper = require("../helpers/siswaHelper");

const siswa = async (request, reply) => {
  try {
    const response = await SiswaHelper.getSiswaList();
    return reply
      .status(200)
      .send({ message: "Data Siswa berhasil didapat", data: response });
  } catch (err) {
    console.log("Data siswa gagal didapat");
    reply
      .status(400)
      .send({ message: "Data siswa gagal didapat", data: err.message });
  }
};

const siswaDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await SiswaHelper.getSiswaDetail(id);
    res
      .status(200)
      .send({ message: "Data Siswa Detail berhasil didapat", data });
  } catch (err) {
    console.error("Gagal mendapatkan data siswa >>>>>", err.message);
    res.status(400).send({ message: err.message });
  }
};

const siswaAdd = async (request, reply) => {
  try {
    const { name, kelas, jenisKelamin } = request.body;
    const data = await SiswaHelper.createSiswa({ name, kelas, jenisKelamin });
    res.status(201).send({ message: "Data Siswa berhasil ditambahkan", data });
  } catch (error) {
    console.log("Data Siswa gagal ditambahkan >>>>>>>>", error);
    res.status(400).send({ message: err.message });
  }
};

const updateSiswa = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, kelas, jenisKelamin } = req.body;
    const updatedSiswa = await SiswaHelper.updateSiswa(id, {
      name,
      kelas,
      jenisKelamin,
    });
    res
      .status(200)
      .send({ message: "Data Siswa Detail berhasil diupdate", updatedSiswa });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: err.message });
  }
};

const deleteSiswa = async (request, reply) => {
  try {
    const { id } = request.params;
    const data = await SiswaHelper.DeleteSiswa(id);
    res.status(200).send({ message: "Data Siswa  berhasil di hapus", data });
  } catch (err) {
    console.error("Error:", err);
    res.status(400).send({ message: err.message });
  }
};

Router.get("/", siswa);
Router.post("/", siswaAdd);
Router.get("/:id", siswaDetail);
Router.delete("/delete/:id", deleteSiswa);
Router.put("/:id", updateSiswa);
module.exports = Router;
