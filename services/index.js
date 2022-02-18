const { login } = require("./Login");
const { createUser, getAllUsers, getUserById, deleteOwnUser } = require("./User");
const { createPost, getAllPosts, getPostById } = require("./Post");

module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserById,
  deleteOwnUser,
  createPost,
  getAllPosts,
  getPostById,
};
