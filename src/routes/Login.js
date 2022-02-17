const router = require("express").Router();
const loginController = require("../controllers/Login");
// implementar a validação de email e password, Helpers
router.post("/", loginController.signIn);

module.exports = router;
