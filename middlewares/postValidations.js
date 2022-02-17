const { validateContent, validateTitle } = require("../helpers");

const createPostValidations = async (req, res, next) => {
  try {
    const { content, title } = req.body;
    await validateTitle(title);
    validateContent(content);

    next();
  } catch (e) {
    console.log(e);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = {
  createPostValidations,
};
