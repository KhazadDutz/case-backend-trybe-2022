const router = require("express").Router();
const loginControllers = require("../controllers/Login");
const validations = require("../middlewares");

// implementar a validação de email e password(Helpers)
router.post("/", validations.loginValidations); //, loginControllers.signIn);

module.exports = router;
