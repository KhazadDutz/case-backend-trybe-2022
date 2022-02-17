const { Users } = require("../models");
const { generateJWT } = require("../helpers");
const { customException } = require("../helpers");

const createUser = async (userData) => {
  const { displayName, email, password, image } = userData;
  const foundUser = await Users.findOne({ where: { email } });
  if (foundUser) throw customException(409, "Usuário já existe");

  const createdUser = await User.create({ displayName, email, password, image });

  const userWithoutPwd = {
    id: createdUser.id,
    email,
  };

  return generateJWT(userWithoutPwd);
};

module.exports = {
  createUser,
};
