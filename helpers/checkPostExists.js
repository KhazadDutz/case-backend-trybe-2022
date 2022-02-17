const { Posts } = require("../models");
const { customException } = require("../helpers");

const checkPostExists = async (paramsId) => {
  const foundPost = Posts.findByPk(paramsId);
  if (!foundPost) throw customException(404, "Post não existe");
  return foundPost;
};

module.exports = {
  checkPostExists,
};
