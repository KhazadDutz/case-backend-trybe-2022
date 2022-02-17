const router = require("express").Router();
const userController = require("../controllers/User");

// implementar a validaçao de displayName, email, password e image
router.post("/", userController.createUser);

// implementar a validação de JSONWebToken(Middleware)
router.get("/:id", userController.getUserById);

// implementar a validação de JSONWebToken(Middleware)
router.get("/", userController.getAllUsers);

// implementar a validação de JSONWebToken(Middleware)
router.delete("/me", userController.deleteOwnUser);

module.exports = router;
