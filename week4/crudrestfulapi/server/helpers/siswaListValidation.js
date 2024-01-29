const Joi = require("joi");
const Boom = require("boom");

const siswaListValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    kelas: Joi.string().required(),
    jenisKelamin: Joi.string().required(),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const siswaIdValidation = (data) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

module.exports = {
  siswaListValidation,
  siswaIdValidation
};
