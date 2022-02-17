const router = require("express").Router();
const userControllers = require("../controllers/User");
const validations = require("../middlewares");

// implementar a verificação se o usuario existe no services checkUserExists
router.post("/", validations.createUserValidations, userControllers.createUser);

// implementar a validação de JSONWebToken(Middleware)
router.get("/:id", userControllers.getUserById);

// implementar a validação de JSONWebToken(Middleware)
router.get("/", userControllers.getAllUsers);

// implementar a validação de JSONWebToken(Middleware)
router.delete("/me", userControllers.deleteOwnUser);

module.exports = router;
