const postServices = require("../services");

const createPost = async (req, res) => {
  try {
    const {
      data: { id: userId },
    } = req.userInfo;
    const { title, content } = req.body;
    const posted = await postServices.createPost(title, content, userId);
    return res.status(201).json(posted);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const { q } = req.query;
    const allPosts = await postServices.getAllPosts(q);
    return res.status(200).json(allPosts);
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const post = await postServices.getPostById(postId);
    return res.status(200).json(post);
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

const updatePostById = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const { title, content } = req.body;
    const {
      data: { id: userId },
    } = req.userInfo;
    const updatedPost = await postServices.updatePostById(postId, userId, title, content);
    return res.status(200).json(updatedPost);
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const {
      data: { id: userId },
    } = req.userInfo;
    await postServices.deletePostById(postId, userId);
    return res.status(204).json();
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
