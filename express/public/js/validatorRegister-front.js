window.addEventListener("load", function () {
    let formularioRegister = document.querySelector("form")
    let nombreRegister = document.querySelector("input#nombreRegister")
    let apellidoRegister = document.querySelector("input#apellidoRegister")
    let emailRegister = document.querySelector("input#emailRegister")
    let contraseñaRegister = document.querySelector("input#contraseñaRegister")
    let imagenRegister = document.querySelector("input#imagenRegister")
    formularioRegister.addEventListener("submit", function(event) {
        event.preventDefault();
        let errors = []
        campo = event.target
        //Validando Nombre
        if(nombreRegister.value.length < 3 ) {
            errors.push("El nombre es obligatorio y debe tener al menos 3 - 10 caracteres")
        }
        //Validando Apellido
        if(apellidoRegister.value.length < 5) {
            errors.push("El apellido es obligatorio y debe tener al menos 5 - 10 caracteres")
        }
        //Validando Email
        regularExpresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        function validarEmail (valor) {
            if(regularExpresion.test(valor)) {
                errors.push("La direecion de email " + valor + " es correcta")
            } else {
                errors.push("El correo debe ser obligatorio y ser valido")
            }
        }
        //Validando Imagen
        if(imagenRegister.value == imagenRegister) {
            errors.push("Debes subir una imagen valida")
        }
        localStorage.setItem("email", emailRegister)
        //let regularExpresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        //if (regularExpresion.test (campo.value) && emailRegister.value.length < 32) {
        //    emailValido = document.getElementById("emailCorrecto")
        //    emailValido = "valido"
        //} else {
        //    errors.push("El correo debe ser obligatorio y ser valido")
        //}
        //Validando Contraseña
        if(contraseñaRegister.value.length <= 8) {
            errors.push("La contraseña es obligatoria y debe tener al menos mas de 8 caracteres")
        }
        localStorage.setItem("password", contraseñaRegister)
        console.log(errors)
        //Error del Campo
        if(errors.length > 0){
            let errorsRegister = document.querySelector("div.errorsRegister ul")
                errorsRegister.innerHTML = "";
                for(let i = 0 ; i < errors.length ; i++ ){
                    errorsRegister.innerHTML += "<li>"+errors[i]+"</li>"//<--esta linea se cambiara pronto
                }
            } else {
              formularioRegister.submit();
        
    }})
})

