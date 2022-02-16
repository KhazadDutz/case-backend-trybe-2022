const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("Aqui vai o controller de Post, para o POST");
});

router.get("/:id", (req, res) => {
  res.send("Aqui vai o controller de Post através do :id, para o GET");
});

router.get("/search?q=:searchTerm", (req, res) => {
  res.send("Aqui vai o controller de Post através do searchTerm, para o GET");
});

router.get("/", (req, res) => {
  res.send("Aqui vai o controller de Post, para o GET");
});

router.put("/:id", (req, res) => {
  res.send("Aqui vai o controller de Post através do :id, para o PUT");
});

router.delete("/:id", (req, res) => {
  res.send("Aqui vai o controller de Post através do :id, para o DELETE");
});

module.exports = router;
