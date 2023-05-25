//const User = require("../models/users")
const db = require("../database/models/index");

 async function userLogueadiMidlewares(req, res, next) {
    // esto es para preuntar si tenes a alguien en session y para mostrar una parte de la barra de navegacion hacerlo despues
    // y es un middleware de aplicacion 
    res.locals.registrado = false;
    console.log(req.cookies);
    let cookieEmail = req.cookies.user;

    //let usurioEnCookie = User.buscarPorCampo("email",cookieEmail);
    if (cookieEmail) {
        let usurioEnCookie = await db.Usuario.findOne({where:{ email: cookieEmail }});
        req.session.userLogged = usurioEnCookie
        
    }

    if (req.session && req.session.userLogged) {
        res.locals.registrado = true;
        res.locals.user = req.session.userLogged 
        //para poder usarla despues y mostrar diefretes cosas en la vista e imprimirlo donde queramos
    }
    
    

    next();
}

module.exports = userLogueadiMidlewares;