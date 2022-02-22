const { customException } = require("./customException");

const validatePwd = (pwd) => {
  if (pwd === undefined) throw customException(400, '"password" is required');
  if (pwd.length < 6) throw customException(400, '"password" length must be 6 characters long');
  return null;
};

module.exports = {
  validatePwd,
};
