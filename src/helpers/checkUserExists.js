// const { Users } = require("../models");
// const { customException } = require("../helpers");

const checkUserExists = async (user) => {
  const foundUser = await Users.findOne({ where: { email } });
  if (foundUser) throw customException(409, "Usuário já existe");
  if (!foundUser) throw customException(400, "Campos inválidos");
};

module.exports = {
  checkUserExists,
};
