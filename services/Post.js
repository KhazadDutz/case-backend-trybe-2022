const { Posts, Users } = require("../models");
const { customException, checkUserAuthorization, checkPostExists } = require("../helpers");

const createPost = async (title, content, userId) => {
  const createdPost = await Posts.create({ title, content, userId });
  const posted = {
    title,
    content,
    userId,
  };
  return posted;
};

const getAllPosts = async () => {
  const allPosts = await Posts.findAll({
    attributes: { exclude: ["UserId", "userId"] },
    include: [{ model: Users, as: "user", attributes: { exclude: ["password"] } }],
  });
  if (allPosts.length === 0) throw customException(404, "Post não encontrado");
  return allPosts;
};

const getPostById = async (postId) => {
  const foundPost = await Posts.findByPk(postId, {
    attributes: { exclude: ["UserId", "userId"] },
    include: [{ model: Users, as: "user", attributes: { exclude: ["password"] } }],
  });
  if (!foundPost) throw customException(404, "Post não existe");
  return foundPost;
};

const updatePostById = async (postId, userId, title, content) => {
  const foundPost = await checkPostExists(postId);
  await checkUserAuthorization(foundPost.userId, userId);
  await Posts.update({ title, content }, { where: { id: postId } });
  const updatedPost = await Posts.findByPk(postId, {
    attributes: { exclude: ["UserId", "published", "updated", "id"] },
  });
  return updatedPost;
};

const deletePostById = async (postId, userId) => {
  const foundPost = await checkPostExists(postId);
  await checkUserAuthorization(foundPost.userId, userId);
  await Posts.destroy({ where: { id: postId } });
  return null;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
