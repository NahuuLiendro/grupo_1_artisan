const { Router } = require("express");

const app = Router();

const controllerUsers = require("../controllers/usersController");

const multer = require("multer")

const path = require("path")

const huespedMiddleware = require("../middlewares/huespedMiddleware");

const autenticarMiddleware = require("../middlewares/autenticarMidleware");

const { body } = require("express-validator");



//VALIDACION PARA REGISTER
let validacionRegister = [
    //ver si es recomendable el bail
    body("nombre")
                .notEmpty().bail().withMessage("Este campo no debe estar vacio")
                .isLength({min:3,max:10}).withMessage("Este campo es obligatorio y debe tener entre 3 y 10 caracteres"),

    body("apellido")
                .notEmpty().bail().withMessage("Este campo no debe estar vacio")
                .isLength({min:5,max:10}).withMessage("Este campo es obligatorio y debe tener entre 5 y 10 caracteres"),

    //el email no se puede repetir con las ya registrados--> falta hacer
    body("email")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isEmail().withMessage("Tienes que escribir un correo electronico valido"),

    body("clave")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isLength({min:5,max:20}).withMessage("Este campo es obligatorio y debe tener entre 5 y 20 caracteres"),
];

//VALIDACION PARA LOGIN
let validacionLogin = [
    body("email")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isEmail().withMessage("Tienes que escribir un correo electronico valido"),

    body("clave")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isLength({min:5,max:20}).withMessage("Este campo es obligatorio y debe tener entre 5 y 10 caracteres"),
];

//VALIDACION PARA EDITAR USUARIO
let validacionEditarUsuario = [
    body("nombre")
                .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                .isLength({min:3,max:10}).withMessage("Este campo es obligatorio y debe tener entre 3 y 10 caracteres"),

    body("apellido")
                    .notEmpty().withMessage("Este campo no debe estar vacio").bail()
                    .isLength({min:5,max:20}).withMessage("Este campo es obligatorio y debe tener entre 5 y 20 caracteres"),  
]


//**Modulo de multer para subir archivos** 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/users"));
    },
    filename: (req, file, cb) => {
        const newFileName = "imagen-perfil--" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

const upload = multer({ storage });

//RUTA PARA LOGUEAR A UN USUARIO**
app.get("/login", huespedMiddleware, controllerUsers.login);

app.post("/procesologin",validacionLogin,controllerUsers.procesoDeLogin);


//RUTA OARA REGISTRAR UN USUARIO CON MIDLEWARES
app.get("/register", huespedMiddleware, controllerUsers.register);

app.post("/register", upload.single("imagen-usuario"),validacionRegister, controllerUsers.procesoDeRegistro);



//RUTA PARA MOSTRAR EL PERFIL DEL USUARIO
app.get("/perfil", autenticarMiddleware, controllerUsers.perfil);




//RUTA PARA CERRAR SESSION DE UN USUARIO--> ver como funciona
app.get("/cerrarSesion", controllerUsers.cerrarSersion);

//RUTA PARA EDITAR UN USUARIO
app.get("/editarUsuario/:id", controllerUsers.editarUsuario);

app.post("/editarUsuario/:id",validacionEditarUsuario,controllerUsers.procesoDeEditarUsuario);


//app.get("/eliminarUsuario", controllerUsers.eliminarUsuario);


module.exports = app;