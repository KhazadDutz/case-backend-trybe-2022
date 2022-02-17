const router = require("express").Router();
const postControllers = require("../controllers/Post");

// implementar a validação de JSONWebToken(Middleware)
// implementar a validacao de title e content(Helpers)
router.post("/", postControllers.createPost);

// implementar a validação de JSONWebToken(Middleware)
router.get("/:id", postControllers.createPost);

router.get("/search?q=:searchTerm", (req, res) => {
  res.send("Aqui vai o controller de Post através do searchTerm, para o GET");
});

//implementar a validação de JSONWebToken(Middleware)
router.get("/", postControllers.getAllPosts);

router.put("/:id", postControllers.updatePostById);

router.delete("/:id", (req, res) => {
  res.send("Aqui vai o controller de Post através do :id, para o DELETE");
});

module.exports = router;
