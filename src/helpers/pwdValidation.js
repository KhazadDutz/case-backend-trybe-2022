const { customException } = require("./customException");

const validatePwd = (pwd) => {
  if (pwd === undefined) throw customException(400, '"password" is required');
  if (pwd === "")
    throw customException(400, '"password" is not allowed to be empty');

  return null;
};

module.exports = {
  validatePwd,
};
