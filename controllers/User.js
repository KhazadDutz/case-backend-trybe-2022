const userServices = require("../services");

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const userData = { displayName, email, password, image };
    const token = await userServices.createUser(userData);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userServices.getUserById(id);
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

const deleteOwnUser = async (req, res) => {
  try {
    const {
      data: { id },
    } = req.userInfo;
    await userServices.deleteOwnUser(id);
    return res.status(204).json();
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteOwnUser,
};
