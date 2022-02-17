const loginServices = require("../services");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = { email, password };
    const token = await loginServices.login(userData);
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = {
  login,
};
