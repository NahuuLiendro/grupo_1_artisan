const apiRoutesCategorias = require("../controllers/apiCategorias");

const { Router } = require("express");

const app = Router();

app.get("/",apiRoutesCategorias.listadoCategorias); // Listado de categorias

module.exports = app;