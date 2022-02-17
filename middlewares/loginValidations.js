const { validateEmail, validatePwd } = require("../helpers/index");

const loginValidations = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await validateEmail(email);
    validatePwd(password);

    next();
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = {
  loginValidations,
};
