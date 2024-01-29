const Router = require("express").Router();

const { request } = require("express");
const SiswaHelper = require("../helpers/siswaHelper");

const siswa = async (request, reply) => {
  try {
    const response = await SiswaHelper.getSiswaList();
    return reply.send(response);
  } catch (err) {
    console.log("error get");
  }
};

const siswaDetail = async (request, reply) => {
  try {
    const { id } = request.params;
    const data = await SiswaHelper.getSiswaDetail(id);
    return reply.send(data);
  } catch (err) {
    console.log("error get");
  }
};

const siswaAdd = async (request, reply) => {
  try {
    const { name, kelas, jenisKelamin } = request.body;
    const data = await SiswaHelper.createSiswa({ name, kelas, jenisKelamin });
    return reply.send(data);
  } catch (error) {
    console.log("error add data >>>>>>>>", error);
  }
};

const updateSiswa = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, kelas, jenisKelamin } = req.body;
    const updatedSiswa = await SiswaHelper.updateSiswa(id, { name, kelas, jenisKelamin });
    return res.send(updatedSiswa);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Gagal memperbarui data siswa");
  }
};

const deleteSiswa = async (request, reply) => {
  try {
    const { id } = request.params;
    const data = await SiswaHelper.DeleteSiswa(id);
    return reply.send(data);
  } catch (err) {
    console.log("error get");
  }
};

Router.get("/", siswa);
Router.post("/", siswaAdd);
Router.get("/:id", siswaDetail);
Router.delete("/delete/:id", deleteSiswa);
Router.put("/:id", updateSiswa);
module.exports = Router;
