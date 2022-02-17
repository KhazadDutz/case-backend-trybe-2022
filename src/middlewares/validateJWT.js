const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Token não encontrado" });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.userInfo = payload;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: "Token expirado ou inválido" });
  }
};

module.exports = {
  validateJWT,
};
