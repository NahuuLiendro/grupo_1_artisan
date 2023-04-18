const controllerProducts = require("../controllers/productsController");
const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const app = Router();


//proceso de multer para subir archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/catalogo"))
    },
    filename: (req, file, cb) => {
        const newFileName = "imagen-NFTS--" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})
//variable para usar en rutas de multer
const upload = multer({ storage })

//RUTA PARA CREAR UN PRODUCTO
app.get("/createProduct", controllerProducts.createProduct);

//RUTA PARA PROCESAR LA INFORMACION DEL PRODUCTO DEL FORMULARIO
app.post("/createProduct", upload.single("product-image"), controllerProducts.procesoCreateProduct);

//RUTA PARA EDITAR UN PRODUCTO
app.get("/editionProduct", controllerProducts.editionProduct);

//RUTA PARA EL CARRITO DE COMPRA
app.get("/productCart", controllerProducts.productCart);

//RUTA PARA DETALLES DE UN PRODUCTO
app.get("/productDetail/:id", controllerProducts.productDetail);

module.exports = app