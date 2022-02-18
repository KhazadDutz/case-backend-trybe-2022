const router = require("express").Router();
const postControllers = require("../controllers/Post");
const validations = require("../middlewares");

router.post(
  "/",
  validations.validateJWT,
  validations.createPostValidations,
  postControllers.createPost
);

router.get("/:id", validations.validateJWT, postControllers.getPostById);

// será implementado à lógica junto da getAllPosts, porém mais a frente
router.get("/search?q=:searchTerm", (req, res) => {
  res.send("Aqui vai o controller de Post através do searchTerm, para o GET");
});

router.get("/", validations.validateJWT, postControllers.getAllPosts);

// implementar a validação de usuário(Middleware)
router.put(
  "/:id",
  validations.validateJWT,
  validations.createPostValidations,
  postControllers.updatePostById
);

// implementar a validação de usuário(Middleware)
router.delete("/:id", validations.validateJWT, postControllers.deletePostById);

module.exports = router;
