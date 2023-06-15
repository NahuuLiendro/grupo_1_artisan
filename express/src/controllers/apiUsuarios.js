const db = require("../database/models/index");


module.exports = {
    listadoUsuarios: async (req, res) => {
        let Usuarios = await db.Usuario.findAll();

        return res.json({
            meta: {
                status: 200,
                url: '/api/users/',
                count: Usuarios.length
            },
            data: Usuarios.map(Usuario => {
                return {
                    id: Usuario.id,
                    nombre: Usuario.nombre,
                    email: Usuario.email,
                    url: `http://localhost:4060/api/users/${Usuario.id}`
                }
            })
        })
    },
    usuarioMostrado: async (req, res) => { // Muestra el producto que es citado por el ID
        let Usuario = await db.Usuario.findByPk(req.params.id);

        let detalleUsuario = {
            id: Usuario.id,
            nombre: Usuario.nombre,
            apellido: Usuario.apellido,
            email: Usuario.email,
            foto : `http://localhost:4060/images/users/${Usuario.foto}`
        }
        if (req.params.id >= 0) {
            return res.json({
                meta: {
                    status: 200,
                    url: '/api/users/' + req.params.id,
                    listadoUsuarios: '/api/users/'
                },
                data: detalleUsuario
            });
        }
    }
}





















/*module.exports = {
        list: async (req, res) => {
            let products = await db.Product.findAll({ include: ['brand', 'category'] });

            // return res.render("products/list",{
            //     products: products,
            //     title: "Listado de productos",
            // })
            return res.json({
                meta: {
                    status: 200,
                    url: '/api/products/',
                    count: products.length
                },
                data: products.map(product => {
                    return {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        brand: product.brand,
                        category: product.category,
                        url: `/api/products/${product.id}`
                    }
                })
            });
        },
        show: async (req, res) => { // Muestra el producto que es citado por el ID
            let product = await db.Product.findByPk(req.params.id);

            let productToSend = {
                id: product.id,
                name: product.name
            }
            if (req.params.id >= 0) {
                // return res.render("products/detail",{
                //     product: product,
                //     title: "Detalle de producto",
                // })
                return res.json({
                    meta: {
                        status: 200,
                        url: '/api/products/' + req.params.id,
                        list: '/api/products/'
                    },
                    data: productToSend
                });
            }
        } }*/