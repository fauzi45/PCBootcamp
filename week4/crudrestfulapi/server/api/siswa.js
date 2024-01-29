const Router = require('express').Router();

const SiswaHelper = require('../helpers/siswaHelper');


const siswa = async (request, reply) => {
  try {
    const response = await SiswaHelper.getSiswaList();  
    console.log(response)
    return reply.send(response);
  } catch (err) {
    console.log("error get")
  }
};



Router.get("/", siswa);

module.exports = Router;
