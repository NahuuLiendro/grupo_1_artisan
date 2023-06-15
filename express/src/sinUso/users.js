const fs = require("fs")
const bcryptjs = require("bcryptjs")
const path = require("path")

const User = {
    nombreArchivo: path.join(__dirname, "../data/users.json"),

    traerUser: function () {
        return JSON.parse(fs.readFileSync(this.nombreArchivo, "utf-8"))
    },

    trearTodosUsarios: function () {
        return this.traerUser();

    }, generarid: function () {
        let todosLosUsers = this.trearTodosUsarios();
        let ultimoUser = todosLosUsers.pop()
        if (ultimoUser) {
            return ultimoUser.id + 1;
        }
        return 1
    },

    buscarUsuariosPK: function (id) {
        let todosLosUsers = this.trearTodosUsarios();
        let userEncontrado = todosLosUsers.find(unUser => unUser.id === id);
        return userEncontrado;
    },
    buscarPorCampo: function (field, text) {
        let todosLosUsers = this.trearTodosUsarios();
        let userEncontrado = todosLosUsers.find(unUser => unUser[field] === text);
        return userEncontrado;

    },
    crear: function (userData, imagen) {
        let todosLosUsers = this.trearTodosUsarios();
        // let usaurio = Users.crear(req.body,req.file)
        let nuevoUser = {
            id: this.generarid(),
            nombre: userData.nombre,
            apellido: userData.apellido,
            email: userData.email,
            clave: bcryptjs.hashSync(userData.clave, 10),
            foto: imagen ? imagen.filename : "default.jpg"
        }
        todosLosUsers.push(nuevoUser);
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(todosLosUsers, null, " "))
        return nuevoUser
    },
    eliminarUser: function (id) {
        let todosLosUsers = this.trearTodosUsarios();
        let userFinal = todosLosUsers.filter(unUser => unUser.id !== id);
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(userFinal, null, " "))
        return true
    }
}



module.exports = User;


