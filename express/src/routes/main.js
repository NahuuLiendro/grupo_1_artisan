const { Router } = require("express");
const app = Router();
const mainController = require("../controllers/main");

//RUTA DE LA HOME (PAGINA DE INICIO)
app.get("/", mainController.home);

//Exportamos la variable app
module.exports = app;