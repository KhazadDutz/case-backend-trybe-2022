// const postServices = require("../services/postServices");

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const posted = await createPost(title, content);
    // posted = {
    //   "title": 'title',
    //   "content": 'text',
    //   "userId": 1
    // }
    return res.status(201).json(posted);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await getAllPosts();
    return res.status(200).json(allPosts);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: e.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await getPostById(id);
    return res.status(200).json(post);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: e.message });
  }
};

const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedPost = await updatePostById(id, title, content);
    return res.status(200).json(updatedPost);
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: e.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
};
