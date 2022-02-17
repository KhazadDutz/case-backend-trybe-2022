const { customException } = require("./customException");

const validateDisplayName = (displayName) => {
  if (displayName === undefined)
    throw customException(400, '"displayName" is required');
  if (displayName === "")
    throw customException(400, '"displayName" is not allowed to be empty');
  if (displayName.length < 8)
    throw customException(
      400,
      '"displayName" must be at least 8 characters long'
    );
  return null;
};

module.exports = {
  validateDisplayName,
};
