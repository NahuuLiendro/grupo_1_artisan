// cree controladores para cada pagina y la exporte para llamarla de las rutas
let fs = require('fs');
let datosHome = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));

const controllerMain = {
    home: (req, res,) => {
        res.render("home", { datosHome })
    }
}

module.exports = controllerMain