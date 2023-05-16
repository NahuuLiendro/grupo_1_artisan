const fs = require("fs");
const path = require("path");

const productos = {
    nombreArchivo: path.join(__dirname, "../data/products.json"),
    traerProductos: function () {
        return JSON.parse(fs.readFileSync(this.nombreArchivo, "utf-8"));
    },
    todosLosProductos: function () {
        return this.traerProductos();
    }, generarid: function () {
        let TodosLosProductos = this.todosLosProductos();
        let ultimoProducto = TodosLosProductos.pop();
        if (ultimoProducto) {
            return ultimoProducto.id + 1;
        }
        return 1;
    },
    /*editarUnProducto: (req,res) =>{
        let todosLosProductos = this.todosLosProductos();

        req.body.id = req.params.id;

        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;

        let producto = todosLosProductos.map(producto =>{
            if(producto.ud == req.body.id){
                return producto = req.body;
            }
            return producto;
        })
        let productoActualizar = JSON.stringify(producto,null,2);
        fs.writeFileSync(this.nombreArchivo,productoActualizar)
        return producto
    },*/
    /*editarUnProducto: function (imagen,req,res) {
        let todosLosProductos = this.todosLosProductos();
        let productoId = req.params.id
        let editar = {
            id : todosLosProductos.find(id => id == productoId),
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: imagen ? imagen.filename : "",
            categoria: req.body.categoria,
            precio: req.body.precio
        }
        todosLosProductos.push(editar);
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(todosLosProductos, null, " "))
        return editar
    },*/

    buscarProductoPK: function (id) {
        let todosLosProductos = this.todosLosProductos();
        let productoEncontrado = todosLosProductos.find(unProducto => unProducto.id === id);
        return productoEncontrado;
    },

    procesoCrearUnProducto: function (productData, imagen) {
        let todosLosProductos = this.todosLosProductos();
        let nuevoProducto = {
            id: this.generarid(),
            nombre: productData.nombre,
            descripcion: productData.descripcion,
            imagen: imagen ? imagen.filename : "",
            categoria: productData.categoria,
            precio: productData.precio
        }
        todosLosProductos.push(nuevoProducto);
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(todosLosProductos, null, " "))
        return nuevoProducto
    },
    eliminarProducto: function (id) {
        let todosLosProductos = this.traerProductos();
        let productoFinal = todosLosProductos.filter(unProducto => unProducto.id !== id);
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(productoFinal, null, " "))
        return true
    }
}
/*console.log(productos.editarUnProducto({
    id:14,
    nombre: "alex",
    descripcion: "sexooooooo",
    imagen: "....",
    categoria: "ilustraciones",
    precio: "90"

}))*/


module.exports = productos

