const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.use("/", (request, response) => {
  response.send("Aqui vai a Home Page da Aplicação");
});

app.use("/user", (request, response) => {
  response.send("Aqui vai a rota para User");
});
app.use("/login", (request, response) => {
  response.send("Aqui vai a rota para Login");
});
app.use("/post", (request, response) => {
  response.send("Aqui vai a rota para Post");
});

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
