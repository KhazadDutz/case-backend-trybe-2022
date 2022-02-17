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

module.exports = {
  createPost,
};
