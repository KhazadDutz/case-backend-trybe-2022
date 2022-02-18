const { login } = require("./Login");
const { createUser, getAllUsers, getUserById, deleteOwnUser } = require("./User");

module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserById,
  deleteOwnUser,
};
