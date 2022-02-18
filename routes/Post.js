const router = require("express").Router();
const postControllers = require("../controllers/Post");
const validations = require("../middlewares");

router.post(
  "/",
  validations.validateJWT,
  validations.createPostValidations,
  postControllers.createPost
);

router.get("/search", validations.validateJWT, postControllers.getAllPosts);

router.get("/:id", validations.validateJWT, postControllers.getPostById);

router.get("/", validations.validateJWT, postControllers.getAllPosts);

router.put(
  "/:id",
  validations.validateJWT,
  validations.createPostValidations,
  postControllers.updatePostById
);

router.delete("/:id", validations.validateJWT, postControllers.deletePostById);

module.exports = router;
