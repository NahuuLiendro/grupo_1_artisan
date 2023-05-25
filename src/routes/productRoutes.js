const controllerProducts = require("../controllers/productsController");
const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const app = Router();

const { body } = require("express-validator");




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



//VALIDACION PARA CREAR UN PRODUCTO
let validacionCrearProducto = [
    body("nombre")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isLength({min:3,max:20}).withMessage("Este campo es obligatorio y debe tener entre 3 y 20 caracteres"),

    body("descripcion")
                    .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                    .isLength({min:10,max:80}).withMessage("Este campo es obligatorio y debe tener entre 10 y 80 caracteres"),
    
    body("precio")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isLength({min:2,max:10}).withMessage("Este campo es obligatorio y debe tener entre 2 y 10 caracteres"),
    body("categoria")
                .notEmpty().withMessage("Debes seleccionar una categoria"),
    body("imagenProducto").custom((value,{req})=>{

        let archivo = req.file
        //let extencion = [".png",".jpg",".webp",".jpeg",".gif"]

        if (!archivo) {
            throw new Error("Tienes que subir una imagen del producto")        
        }/*else{
            let imagenExtencion =  path.extname(file.originalname) 
            if (!extencion.includes(imagenExtencion)) {
                throw new Error("Las extenciones permitadas son:" +  extencion.join(", "))
        }
    }*/
    return true
    })
];

//VALIDACION PARA EDITAR UN PRODUCTO 
let validacionEditarProducto = [
    body("nombre")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isLength({min:3,max:20}).withMessage("Este campo es obligatorio y debe tener entre 3 y 20 caracteres"),

    body("descripcion")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isLength({min:10,max:80}).withMessage("Este campo es obligatorio y debe tener entre 10 y 80 caracteres"),
                
    body("precio")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isLength({min:2,max:10}).withMessage("Este campo es obligatorio y debe tener entre 2 y 10 caracteres"),
    body("categoria")
                    .notEmpty().withMessage("Debes seleccionar una categoria"),
];


//RUTA PARA CREAR UN PRODUCTO
app.get("/createProduct", controllerProducts.createProduct);

//RUTA PARA PROCESAR LA INFORMACION DEL PRODUCTO DEL FORMULARIO
app.post("/createProduct", upload.single("imagenProducto"),validacionCrearProducto, controllerProducts.procesoCreateProduct);

//RUTA PARA EDITAR UN PRODUCTO
app.get("/editionProduct/:id",validacionEditarProducto,controllerProducts.editionProduct);

app.post("/editionProduct/:id",validacionEditarProducto,controllerProducts.procesoEditionProduct);

//RUTA PARA EL CARRITO DE COMPRA
app.get("/productCart", controllerProducts.productCart);

//RUTA PARA DETALLES DE UN PRODUCTO
app.get("/productDetail/:id", controllerProducts.productDetail);



app.delete("/:id/delete", controllerProducts.delete);



module.exports = app