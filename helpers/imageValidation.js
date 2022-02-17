const { customException } = require("./customException");

const validateImage = (imagePath) => {
  if (!imagePath) throw customException(400, '"image" is required');
  return null;
};

module.exports = {
  validateImage,
};
