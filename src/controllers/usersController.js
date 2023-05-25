// controladores para usarios
//const Users = require("../models/users");
const bcryptjs = require("bcryptjs");
//requiero los modelos del objeto db
const db = require("../database/models/index");

const { validationResult } = require("express-validator")


const controllerUsers = {
    login: (req, res) => {
        res.render("users/login")
    },
    procesoDeLogin: async (req, res) => {
        let errors = validationResult(req)

        if (errors.errors.length > 0) {
            return res.render("users/login", { 
                errors: errors.mapped(),
                oldData: req.body
            })

        } else {

        }
        // se buscar por campo el email
        //let usuarioParaLoguear = Users.buscarPorCampo("email", req.body.email);
        let usuarioParaLoguear = await db.Usuario.findOne({
            where: { email: req.body.email }
        })
        //aca validamos si el email coicide con el registrado 
        if (usuarioParaLoguear) {
            //comparamos la contraseña registrada con la ingresada quellega del body
            let claveCorrecta = bcryptjs.compareSync(req.body.clave, usuarioParaLoguear.clave)
            // se valida
            if (claveCorrecta) {
                //eliminamos la clave aca para dejar en session
                delete usuarioParaLoguear.clave
                //logueamos al usuario
                req.session.userLogged = usuarioParaLoguear;
                // si coincide todo lo redirigimos a la pagina de inicio
                if (req.body.recordarUsuario) {
                    res.cookie("user", req.body.email, { maxAge: (3000 * 60) * 2 })
                }
                return res.redirect("/")
            } else {
                //si no a la vista register para que se registre
                return res.redirect("users/register")
            }
        }
    },
    register: (req, res) => {
        //cokie para guardar al usuario recibe algo para guardar,un nombre y la cantidad de duracion
        res.render("users/register")
    },
    procesoDeRegistro: async (req, res) => {
        //Validacion para errores para registrar un usuario
        let errors = validationResult(req)

        if (errors.errors.length > 0) {
            return res.render("users/register", { 
                errors: errors.mapped(),
                oldData: req.body
            })

        } else {

        }
        // creamos aca el ususario
        let usarioParaRegistrar = await db.Usuario.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            clave: bcryptjs.hashSync(req.body.clave, 10),
            foto: req.file.filename  //req.file.filename : "default.jpg"
        })

        return res.redirect("/users/login")
    },
    //fijarse si llamar de la base de datos
    perfil: async (req, res) => {
        res.render("users/perfil"), {
            user: req.session.userLogged
        }
    },
    editarUsuario: async (req, res) => {
        //**pedir al profe para que me ayude a hacerlo**
        res.render("users/editarUsuario", {
            user: req.session.userLogged
        })
    },
    procesoDeEditarUsuario: async (req, res) => {
        let errors = validationResult(req)

        if (errors.errors.length > 0) {
            return res.render("users/editarUsuario", { 
                errors: errors.mapped(),
                oldData: req.body
            })
        }


        let editar = await db.Usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
        }, {
            where: { id: req.params.id }
        })
        console.log(editar)
        if (editar[0] > 0) {

            req.session.userLogged.nombre = req.body.nombre
            req.session.userLogged.apellido = req.body.apellido
            return res.redirect("/users/perfil")

        } else {
            return res.send("Error al cargar la informacion")

        }

        /// editar[0] > 0 ? res.redirect("/users/perfil") : res.send("Error al cargar la informacion") 
        //return res.redirect("/users/perfil")
    },
    cerrarSersion: (req, res) => {
        //eliminar cookie cuando cierro session
        res.clearCookie("user");
        //este metodo borra todo lo que este en session
        req.session.destroy();
        // esto redirige a la pagina de inicio (home)
        return res.redirect("/");
    },
    /*eliminarUsuario: (req, res) => {
        res.render("users/elimarUsuario")
    }*/
}

module.exports = controllerUsers

