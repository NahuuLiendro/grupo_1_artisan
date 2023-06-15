const { Router } = require("express");
const app = Router();
const multer = require("multer")
const path = require("path")

const controllerUsers = require("../controllers/usersController");
const huespedMiddleware = require("../middlewares/huespedMiddleware");
const autenticarMiddleware = require("../middlewares/autenticarMidleware");
const db = require("../database/models/index");
const { body } = require("express-validator");



//VALIDACION PARA REGISTER(BACK-END)
let validacionRegister = [
    //ver si es recomendable el bail
    body("nombre")
        .notEmpty().bail().withMessage("Este campo no debe estar vacio")
        .isLength({ min: 3, max: 10 }).withMessage("Este campo es obligatorio y debe tener entre 3 y 10 caracteres"),

    body("apellido")
        .notEmpty().bail().withMessage("Este campo no debe estar vacio")
        .isLength({ min: 5, max: 10 }).withMessage("Este campo es obligatorio y debe tener entre 5 y 10 caracteres"),

    //el email no se puede repetir con las ya registrados--> falta hacer
    body("email")
        .notEmpty().withMessage("Este campo no debe estar vacio").bail()
        .isEmail().withMessage("Tienes que escribir un correo electronico valido")
        .custom(async (value) => {
            const user = await db.Usuario.findOne({
                where: { email: value }
            })
            if (user) {
                throw new Error("Este correo ya esta en uso")
            }
        }),


    body("clave")
        .notEmpty().withMessage("Este campo no debe estar vacio").bail()
        .isLength({ min: 5, max: 20 }).withMessage("Este campo es obligatorio y debe tener entre 5 y 20 caracteres"),

    body("imagenUsuario").custom((value, { req }) => {
        let archivo = req.file
        let extencion = [".png", ".jpg", ".webp", ".jpeg", ".gif"]
        let imagenExtencion = path.extname(archivo.originalname)

        if (!extencion.includes(imagenExtencion)) {
            throw new Error("Las extenciones permitadas son:" + extencion.join(", "))
        }
        return true
    })
];

//VALIDACION PARA LOGIN(BACK-END)
let validacionLogin = [
    body("email")
        .notEmpty().withMessage("Este campo no debe estar vacio").bail()
        .isEmail().withMessage("Tienes que escribir un correo electronico valido"),

    body("clave")
        .notEmpty().withMessage("Este campo no debe estar vacio").bail()
        .isLength({ min: 5, max: 20 }).withMessage("Este campo es obligatorio y debe tener entre 5 y 10 caracteres"),
];

//VALIDACION PARA EDITAR USUARIO(BACK-END)
let validacionEditarUsuario = [
    body("nombre")
        .notEmpty().withMessage("Este campo no debe estar vacio").bail()
        .isLength({ min: 3, max: 10 }).withMessage("Este campo es obligatorio y debe tener entre 3 y 10 caracteres"),

    body("apellido")
        .notEmpty().withMessage("Este campo no debe estar vacio").bail()
        .isLength({ min: 5, max: 20 }).withMessage("Este campo es obligatorio y debe tener entre 5 y 20 caracteres"),
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

app.post("/procesologin", validacionLogin, controllerUsers.procesoDeLogin);


//RUTA PARA REGISTRAR UN USUARIO CON MIDLEWARES
app.get("/register", huespedMiddleware, controllerUsers.register);

app.post("/register", upload.single("imagenUsuario"), validacionRegister, controllerUsers.procesoDeRegistro);

//RUTA PARA MOSTRAR EL PERFIL DEL USUARIO
app.get("/perfil", autenticarMiddleware, controllerUsers.perfil);


//RUTA PARA CERRAR SESSION DE UN USUARIO--> ver como funciona
app.get("/cerrarSesion", controllerUsers.cerrarSersion);

//RUTA PARA EDITAR UN USUARIO
app.get("/editarUsuario/:id", controllerUsers.editarUsuario);

app.post("/editarUsuario/:id", validacionEditarUsuario, controllerUsers.procesoDeEditarUsuario);




//app.get("/eliminarUsuario", controllerUsers.eliminarUsuario);


module.exports = app;