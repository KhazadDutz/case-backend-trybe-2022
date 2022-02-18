const { Posts } = require("../models");
const { customException } = require("./customException");

const checkPostExists = async (paramsId) => {
  const foundPost = Posts.findByPk(paramsId);
  if (!foundPost) throw customException(404, "Post não existe");
  return foundPost;
};

module.exports = {
  checkPostExists,
};
