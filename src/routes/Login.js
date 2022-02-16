const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("Aqui vai o controller do Login");
});

module.exports = router;
