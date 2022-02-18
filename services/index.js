const { login } = require("./Login");
const { createUser, getAllUsers, getUserById, deleteOwnUser } = require("./User");
const { createPost } = require("./Post");

module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserById,
  deleteOwnUser,
  createPost,
};
