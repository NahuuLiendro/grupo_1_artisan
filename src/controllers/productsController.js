const e = require('express');
let fs = require('fs');
let datos = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const db = require("../database/models/index");

const { validationResult } = require("express-validator")


const controllerProducts = {
    procesoCreateProduct: async (req, res,) => {
        let errors = validationResult(req)

        if (errors.errors.length > 0) {
            return res.render("product/createProduct", { 
                errors: errors.mapped(),
                oldData: req.body
            })

        }
        //let productoParaCrear = productos.procesoCrearUnProducto(req.body, req.file)
        let productoParaCrear = await db.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria: req.body.categoria,
            imagen: req.file.filename,
        })
        //if (productoParaCrear) {
            return res.redirect("/")
        //}
    },
    createProduct: (req, res) => {
        res.render("product/createProduct")
    },

    //*** pedir ayuda si nos puede ayudar con la edicion del producto 
    editionProduct: async (req, res) => {
        let detallePruducto = await db.Producto.findOne(
            {where:{id:req.params.id}
        })
        return res.render("product/editionProduct",{producto:detallePruducto})
    },
    procesoEditionProduct: async(req,res)=>{
        let errors = validationResult(req)

        if (errors.errors.length > 0) {
            return  res.render("product/editionProduct", { 
                errors: errors.mapped(),
                oldData: req.body
            })

        }
        let editar = await db.Producto.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria: req.body.categoria,
        }, {
            where: { id: req.params.id }
        })
        return editar > 0 ? res.redirect("/") : res.send("Error al cargar la informacion") 
        //return res.redirect("/") 
    },
    productCart: (req, res) => {
        res.render("product/productCart")
    },
    productDetail: async(req, res) => {
        let detallePruducto = await db.Producto.findOne(
            {where:{id:req.params.id}
        })
        return res.render("product/productDetail",{producto:detallePruducto})
        //console.log(datos.find(e => e.id == req.params.id))
        //res.render("product/productDetail", { datoProducto: datos.filter(e => e.id == req.params.id)[0] })
    },
    delete: async (req, res)=>{
        let  result = await db.Producto.destroy(
            {where:{id:req.params.id}
        })
        return  result > 0 ? res.redirect("/") : res.send("error al cargar la informacion")
    } 
};



module.exports = controllerProducts

