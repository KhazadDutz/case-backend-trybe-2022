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

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userServices.getUserById(id);
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: e.message });
  }
};

const deleteOwnUser = async (req, res) => {
  try {
    // data -> userInfo vem do JSONWebToken
    const {
      data: { id },
    } = req.userInfo;
    await userServices.deleteOwnUser(id);
    return res.status(204).json();
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteOwnUser,
};
