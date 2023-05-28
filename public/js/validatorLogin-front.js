window.addEventListener("load", function () {
    let formularioLogin = document.querySelector("form")
    let emailLogin = document.querySelector("input#emailLogin")
    let contraseñaLogin = document.querySelector("input#contraseñaLogin").value
    formularioLogin.addEventListener("submit", function (e) {
        e.preventDefault();
        let errors = []
        if(validandoEmail(emailLogin)) {
            errors.push("El correo debe ser obligatorio y ser valido")
        }
        function validandoEmail (emailLogin) {
            let regularExpresion = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
            return regularExpresion.test(emailLogin)
        }
        //preguntar a la profe => === || ==
        if(contraseñaLogin.value == "") {
            errors.push("La contraseña es obligatoria")
        }
        if(errors.length > 0){
            let errorsLogin = document.querySelector("div.errorsLogin ul")
                errorsLogin.innerHTML = "";
                for(let i = 0 ; i < errors.length ; i++ ){
                    errorsLogin.innerHTML += "<li>"+errors[i]+"</li>"//<--esta linea se cambiara pronto <li>
                }
            } else {
              formularioLogin.submit();
              
    }})
    
})