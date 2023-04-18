const e = require('express');
let fs = require('fs');
let productos = require("../models/products")
let datos = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
//let datos = [];

/*datosHome.forEach(dato => {
    datos.push(dato);
})*/


const controllerProducts = {
    procesoCreateProduct: (req, res) => {
        let productoParaCrear = productos.procesoCrearUnProducto(req.body, req.file)
        console.log(req.body);
        if (productoParaCrear) {
            return res.redirect("/")
        }
    },
    createProduct: (req, res) => {
        res.render("product/createProduct")
    },
    //*** pedir ayuda si nos puede ayudar con la edicion del producto 
    editionProduct: (req, res) => {
        res.render("product/editionProduct")

    },
    productCart: (req, res) => {
        res.render("product/productCart")
    },
    productDetail: (req, res) => {
        console.log(datos.find(e => e.id == req.params.id))
        res.render("product/productDetail", { datoProducto: datos.filter(e => e.id == req.params.id)[0] })
    },

};

module.exports = controllerProducts

