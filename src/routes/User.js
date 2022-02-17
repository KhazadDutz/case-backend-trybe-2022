const router = require("express").Router();
const userControllers = require("../controllers/User");

// implementar a validaçao de displayName, email, password e image(Helpers)
router.post("/", userControllers.createUser);

// implementar a validação de JSONWebToken(Middleware)
router.get("/:id", userControllers.getUserById);

// implementar a validação de JSONWebToken(Middleware)
router.get("/", userControllers.getAllUsers);

// implementar a validação de JSONWebToken(Middleware)
router.delete("/me", userControllers.deleteOwnUser);

module.exports = router;
