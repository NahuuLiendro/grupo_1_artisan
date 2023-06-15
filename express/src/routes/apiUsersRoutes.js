const apiRoutesUsuarios = require("../controllers/apiUsuarios")
const { Router } = require("express");
const app = Router();


app.get("/", apiRoutesUsuarios.listadoUsuarios) // Listado de productos

app.get("/:id", apiRoutesUsuarios.usuarioMostrado) // Vista del detalle de un producto

module.exports = app;
