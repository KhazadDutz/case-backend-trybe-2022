const { customException } = require("./customException");

const validateContent = (content) => {
  if (!content) throw customException(400, '"content" is required');
  return null;
};

module.exports = {
  validateContent,
};
