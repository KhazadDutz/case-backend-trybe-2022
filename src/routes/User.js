const router = require("express").Router();
const userController = require("../controllers/User");
// implementar a validaçao de displayName, email, password e image
router.post("/", userController.createUser);

router.get("/:id", (req, res) => {
  res.send("Aqui vai o controller de Users atraves do :id, para o GET");
});
//implementar a validação de JSONWebToken(Middleware)
router.get("/", userController.getAllUsers);

router.delete("/me", (req, res) => {
  res.send("Aqui vai o controller de Users, para o DELETE");
});

module.exports = router;
