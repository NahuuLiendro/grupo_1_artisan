// cree controladores para cada pagina y la exporte para llamarla de las rutas
//let fs = require('fs');
//let datosHome = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'))

const db = require("../database/models/index");

const controllerMain = {
    home: async (req, res,) => {
        let todosLosProductos = await db.Producto.findAll()
        res.render("home", { db: todosLosProductos })
    }
}

module.exports = controllerMain