const router = require("express").Router();
const postControllers = require("../controllers/Post");

// implementar a validação de JSONWebToken(Middleware)
// implementar a validacao de title e content(Helpers)
router.post("/", postControllers.createPost);

// implementar a validação de JSONWebToken(Middleware)
router.get("/:id", postControllers.createPost);

// será implementado à lógica junto da getAllPosts, porém mais a frente
router.get("/search?q=:searchTerm", (req, res) => {
  res.send("Aqui vai o controller de Post através do searchTerm, para o GET");
});

//implementar a validação de JSONWebToken(Middleware)
router.get("/", postControllers.getAllPosts);

// implementar a validação de JSONWebToken(Middleware)
// implementar a validação de usuário(Middleware)
router.put("/:id", postControllers.updatePostById);

// implementar a validação de JSONWebToken(Middleware)
// implementar a validação de usuário(Middleware)
router.delete("/:id", postControllers.deletePostById);

module.exports = router;
