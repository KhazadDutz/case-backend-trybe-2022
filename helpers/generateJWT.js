const jwt = require("jsonwebtoken");

const generateJWT = (userInfo) => {
  const secret = process.env.JWT_SECRET;

  const jwtConfiguration = {
    expiresIn: "14d",
    algorithm: "HS256",
  };

  const userWithoutPwd = userInfo;

  const token = jwt.sign({ data: userWithoutPwd }, secret, jwtConfiguration);
  return token;
};

module.exports = {
  generateJWT,
};
