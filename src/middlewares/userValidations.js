const {
  validateEmail,
  validatePwd,
  validateDisplayName,
  validateImage,
} = require("../helpers");

const createUserValidations = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    await validateDisplayName(displayName);
    await validateEmail(email);
    await validatePwd(password);
    validateImage(image);

    next();
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = {
  createUserValidations,
};
