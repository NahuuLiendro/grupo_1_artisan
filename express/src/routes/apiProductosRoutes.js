const apiRoutesProductos = require("../controllers/apiProductos");
const { Router } = require("express");
const app = Router();

app.get("/",apiRoutesProductos.listadoProductos); // Listado de productos

app.get("/:id",apiRoutesProductos.mostrarProducto); // Vista del detalle de un producto

module.exports = app;










