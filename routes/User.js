const router = require("express").Router();
const userControllers = require("../controllers/User");
const validations = require("../middlewares");

router.post("/", validations.createUserValidations, userControllers.createUser);

router.get("/:id", validations.validateJWT, userControllers.getUserById);

router.get("/", validations.validateJWT, userControllers.getAllUsers);

router.delete("/me", validations.validateJWT, userControllers.deleteOwnUser);

module.exports = router;
