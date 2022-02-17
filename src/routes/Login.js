const router = require("express").Router();
const loginControllers = require("../controllers/Login");
const validations = require("../middlewares");

router.post("/", validations.loginValidations, loginControllers.signIn);

module.exports = router;
