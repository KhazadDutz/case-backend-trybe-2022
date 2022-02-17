const router = require("express").Router();
const postController = require("../controllers/Post");

// implementar a validação de JSONWebToken(Middleware)
// implementar a validacao de title e content(Helpers)
router.post("/", postController.createPost);

router.get("/:id", (req, res) => {
  res.send("Aqui vai o controller de Post através do :id, para o GET");
});

router.get("/search?q=:searchTerm", (req, res) => {
  res.send("Aqui vai o controller de Post através do searchTerm, para o GET");
});

//implementar a validação de JSONWebToken(Middleware)
router.get("/", postController.getAllPosts);

router.put("/:id", (req, res) => {
  res.send("Aqui vai o controller de Post através do :id, para o PUT");
});

router.delete("/:id", (req, res) => {
  res.send("Aqui vai o controller de Post através do :id, para o DELETE");
});

module.exports = router;
