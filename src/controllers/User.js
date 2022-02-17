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

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: e.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
