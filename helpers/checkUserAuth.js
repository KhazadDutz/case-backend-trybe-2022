const { Posts } = require("../models");
const { customException } = require("../helpers");

const checkUserAuthPostExists = async (paramsId, jwtId) => {
  const foundPost = Posts.findByPk(paramsId);
  if (!foundPost) throw customException(404, "Post não existe");
  if (jwtId !== foundPost.userId) throw customException(401, "Usuário não autorizado");
  return null;
};

module.exports = {
  checkUserAuthPostExists,
};
