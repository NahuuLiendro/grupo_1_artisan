function middleware(req, res, next) {
    //esto si el usuario se loguea bien lo dirige al perfil correctamente si esta session
    if (req.session.userLogged) {
        return res.redirect("/users/perfil");
    }
    next();
}

module.exports = middleware;
