const { loginValidations } = require("./loginValidations");
const { createUserValidations } = require("./userValidations");
const { createPostValidations } = require("./postValidations");
const { validateJWT } = require("./validateJWT");

module.exports = {
  loginValidations,
  createUserValidations,
  createPostValidations,
  validateJWT,
};
