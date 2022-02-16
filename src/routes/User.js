const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("Aqui vai o controller de Users, para o POST");
});

router.get("/:id", (req, res) => {
  res.send("Aqui vai o controller de Users atraves do :id, para o GET");
});

router.get("/", (req, res) => {
  res.send("Aqui vai o controller de Users, para o GET");
});

router.delete("/me", (req, res) => {
  res.send("Aqui vai o controller de Users, para o DELETE");
});

module.exports = router;
