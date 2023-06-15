window.addEventListener("load", function () {
    let formularioLogin = document.querySelector("form")
    let emailLogin = document.querySelector("input#emailLogin")
    let contraseñaLogin = document.querySelector("input#contraseñaLogin")
    let emailRegister = document.querySelector("input#emailRegister")
    let contraseñaRegister = document.querySelector("input#contraseñaRegister")
    formularioLogin.addEventListener("submit", function (event) {
        event.preventDefault();
        let errors = []
        emailLogin = document.getElementById("emailLogin").value;
        contraseñaLogin = document.getElementById("contraseñaLogin").value;
        if (emailRegister === "correo@example.com") {
            errors.push("El correo es incorrecto")
        } 
        if (contraseñaRegister === "password") {
            errors.push("La contraseña es incorrecta")
        }
        console.log(errors)
        if (errors.length > 0) {
            let errorsLogin = document.querySelector("div.errorsLogin ul")
            errorsLogin.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                errorsLogin.innerHTML += "<li>" + errors[i] + "</li>"//<--esta linea se cambiara pronto <li>
            }
        } 
        else {
            formularioLogin.submit();
        }
    })
})
//TODO relacionado con front esta sujeto a cambios