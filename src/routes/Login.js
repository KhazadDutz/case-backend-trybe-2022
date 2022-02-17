const router = require("express").Router();
const loginControllers = require("../controllers/Login");

// implementar a validação de email e password(Helpers)
router.post("/", loginControllers.signIn);

module.exports = router;
