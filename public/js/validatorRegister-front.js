window.addEventListener("load", function () {
    let formularioRegister = document.querySelector("form")
    let nombreRegister = document.querySelector("input#nombreRegister")
    let apellidoRegister = document.querySelector("input#apellidoRegister")
    let emailRegister = document.querySelector("input#emailRegister")
    let contraseñaRegister = document.querySelector("input#contraseñaRegister")
    formularioRegister.addEventListener("submit", function(event) {
        event.preventDefault();
        let errors = []
        if(nombreRegister.value.length < 3 ) {
            errors.push("Este campo es obligatorio y debe tener al menos 3 - 10 caracteres")
        }
        if(apellidoRegister.value.length < 5) {
            errors.push("Este campo es obligatorio y debe tener al menos 5 - 10 caracteres")
        }
        if(validarEmail(emailRegister)) {
            errors.push("El correo debe ser obligatorio y ser valido")
        }
        
        function validarEmail (emailRegister) {
            let regularExpresion = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
            return regularExpresion.test(emailRegister)
        }
        if(contraseñaRegister.value.length <= 8) {
            errors.push("La contraseña es obligatoria y debe tener al menos mas de 8 caracteres")
        }
        if(errors.length > 0){
            let errorsRegister = document.querySelector("div.errorsRegister ul")
                errorsRegister.innerHTML = "";
                for(let i = 0 ; i < errors.length ; i++ ){
                    errorsRegister.innerHTML += "<li>"+errors[i]+"</li>"//<--esta linea se cambiara pronto
                }
            } else {
              formularioRegister.submit();
        console.log(errors)
    }})
})
//TODO relacionado con front esta sujeto a cambios
