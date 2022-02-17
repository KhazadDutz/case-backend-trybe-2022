const { customException } = require("./customException");

const validateTitle = (title) => {
  if (!title) throw customException(400, '"title" is required');
  return null;
};

module.exports = {
  validateTitle,
};
