const router = require("express").Router();
const loginControllers = require("../controllers/Login");
const validations = require("../middlewares");

router.post("/", validations.loginValidations, loginControllers.login);

module.exports = router;
