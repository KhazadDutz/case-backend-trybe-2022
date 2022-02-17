const { Users } = require("../models");
const { generateJWT } = require("../helpers");

const login = async (userData) => {
  const { email, password } = userData;
  const foundUser = await Users.findOne({ where: { email } });
  if (!foundUser) throw customException(400, "Campos inválidos");

  if (password !== foundUser.password) throw customException(400, "Campos inválidos");

  const userWithoutPwd = {
    id: foundUser.id,
    email,
  };

  return generateJWT(userWithoutPwd);
};

module.exports = {
  login,
};
