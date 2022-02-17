const { Posts } = require("../models");
const { customException, checkUserAuthPostExists } = require("../helpers");

const createPost = async () => {};

const getAllPosts = async () => {};

const getPostById = async () => {};

const updatePostById = async (postId, userId, title, content) => {
  await checkUserAuthPostExists(postId, userId);
};

const deletePostById = async (postId, userId) => {
  await checkUserAuthPostExists(postId, userId);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
