function autenticarMiddleware(req, res, next) {
    // esto es para que si el usuario no esta logueado lo dirige al login para loguearse devuelta
    if (!req.session.userLogged) {
        return res.redirect("/users/login")
    }
    next();

}


module.exports = autenticarMiddleware;