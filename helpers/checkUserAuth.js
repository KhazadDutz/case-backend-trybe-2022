const { customException } = require("./customException");

const checkUserAuthorization = async (foundPost, jwtId) => {
  if (jwtId !== foundPost) throw customException(401, "Usuário não autorizado");
  return null;
};

module.exports = {
  checkUserAuthorization,
};
