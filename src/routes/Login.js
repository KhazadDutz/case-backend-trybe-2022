const router = require("express").Router();
const loginControllers = require("../controllers/Login");
const validations = require("../middlewares");

// implementar a verificação se o usuario existe no services checkUserExists
router.post("/", validations.loginValidations, loginControllers.signIn);

module.exports = router;
