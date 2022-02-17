const { Posts } = require("../models");
const { customException, checkUserAuthorization, checkPostExists } = require("../helpers");

const createPost = async () => {};

const getAllPosts = async () => {};

const getPostById = async (postId) => {
  const foundPost = await checkPostExists(postId);
  return foundPost;
};

const updatePostById = async (postId, userId, title, content) => {
  const foundPost = await checkPostExists(postId);
  await checkUserAuthorization(foundPost.userId, userId);
};

const deletePostById = async (postId, userId) => {
  const foundPost = await checkPostExists(postId);
  await checkUserAuthorization(foundPost.userId, userId);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
