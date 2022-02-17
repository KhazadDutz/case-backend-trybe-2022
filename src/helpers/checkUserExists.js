const { Users } = require("../models");

const checkUserExists = async (user) => {
  const foundUser = await Users.findOne({ where: { email } });
  if (!foundUser) throw new Error("Campos inválidos");
  return null;
};

module.exports = {
  checkUserExists,
};
