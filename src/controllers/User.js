// const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  try {
    const token = await userServices.createUser(req.body);
    return res.status(201).json({ message: e.message });
  } catch (e) {
    console.log(e);
    return res.status(409).json({ message: e.message });
  }
};

module.exports = {
  createUser,
};
