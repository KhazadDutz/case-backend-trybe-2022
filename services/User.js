const { Users } = require("../models");
const { generateJWT } = require("../helpers");
const { customException } = require("../helpers");

const createUser = async (userData) => {
  const { displayName, email, password, image } = userData;
  const foundUser = await Users.findOne({ where: { email } });
  if (foundUser) throw customException(409, "Usuário já existe");

  const createdUser = await Users.create({ displayName, email, password, image });

  const userWithoutPwd = {
    id: createdUser.id,
    email,
  };

  return generateJWT(userWithoutPwd);
};

const getAllUsers = async () => {
  const foundUsers = await Users.findAll();
  return foundUsers;
};

const getUserById = async (id) => {
  const foundUser = await Users.findByPk(id);
  if (!foundUser) throw customException(404, "Usuário não existe");
  return foundUser;
};

const deleteOwnUser = async (id) => {
  await Users.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteOwnUser,
};
