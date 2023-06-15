const db = require("../database/models/index");


module.exports = {
    listadoProductos: async (req, res) => {
        let Productos = await db.Producto.findAll({include:["categoria"]});

        return res.json({
            meta: {
                status: 200,
                url: '/api/products/',
                count: Productos.length
            },
            data: Productos.map(producto => {
                return {
                    id: producto.id,
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    categoria: producto.categoria,
                    url: `http://localhost:4060/api/users/${producto.id}`
                }
            })
        })
    },
    mostrarProducto: async (req, res) => { // Muestra el producto que es citado por el ID
        let Producto  = await db.Producto.findByPk(req.params.id,{include:["categoria"]});

        let detalleProducto = {
            id: Producto.id,
            nombre: Producto.nombre,
            descripcion: Producto.descripcion,
            imagen: `http://localhost:4060/images/users/${Producto.foto}`,
            precio: Producto.precio,
            categoria: Producto.categoria,
        }
        if (req.params.id >= 0) {
            return res.json({
                meta: {
                    status: 200,
                    url: '/api/products/' + req.params.id,
                    listadoProductos: '/api/products/'
                },
                data: detalleProducto
            });
        }
    }
}




