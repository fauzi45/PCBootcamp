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


Router.get("/", siswa);
Router.get("/:id",siswaDetail);
module.exports = Router;
