const { customException } = require("./customException");

const validateEmail = (email) => {
  // procurar um regex melhor
  const validRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  );

  if (email === undefined) throw customException(400, '"email" is required');
  if (email === "")
    throw customException(400, '"email" is not allowed to be empty');

  const validEmail = validRegex.test(email);

  if (!validEmail) throw customException(400, '"email" must be a valid email');

  return null;
};

module.exports = {
  validateEmail,
};
