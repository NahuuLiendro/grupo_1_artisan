const db = require("../database/models/index");

module.exports = {
    listadoCategorias: async (req, res) => {
        let Categorias = await db.Categoria.findAll({include:["productos"]});
        console.log(Categorias)
        return res.json({
            meta: {
                status: 200,
                url: '/api/categorias/',
                count: Categorias.length
            },
            data: Categorias.map(categoria => {
                return {
                    id: categoria.id,
                    nombre: categoria.nombre,
                    productos: categoria.productos
                }
            })
        })
        
    }
}