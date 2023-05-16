const { Router } = require("express");
const app = Router();
const controllerUsers = require("../controllers/usersController");
const multer = require("multer")
const path = require("path")
const huespedMiddleware = require("../middlewares/huespedMiddleware");
const autenticarMiddleware = require("../middlewares/autenticarMidleware");

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

//RUTA DE PROCESO DE LOGEAR A UN USUARIO
app.post("/procesologin", controllerUsers.procesoDeLogin);

//RUTA OARA REGISTRAR UN USUARIO CON MIDLEWARES
app.get("/register", huespedMiddleware, controllerUsers.register);

//RUTA PARA PROCESAR LA INFORMACION DEL USUARIO QUE SERIA EL PROCESO DE REGISTRO
app.post("/register", upload.single("imagen-usuario"), controllerUsers.procesoDeRegistro);

//RUTA PARA MOSTRAR EL PERFIL DEL USUARIO
app.get("/perfil", autenticarMiddleware, controllerUsers.perfil);

//RUTA PARA CERRAR SESSION DE UN USUARIO--> ver como funciona
app.get("/cerrarSesion", controllerUsers.cerrarSersion);

//RUTA PARA EDITAR UN USUARIO
app.get("/editarUsuario/:id", controllerUsers.editarUsuario);

app.post("/editarUsuario/:id",controllerUsers.procesoDeEditarUsuario);


//app.get("/eliminarUsuario", controllerUsers.eliminarUsuario);


module.exports = app;