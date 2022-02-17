// const loginServices = require("../services/loginServices");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginServices.login(email, password);
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
};

module.exports = {
  login,
};
