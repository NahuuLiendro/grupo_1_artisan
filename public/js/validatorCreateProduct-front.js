window.addEventListener("load", function () {
    let formularioCreateProduct = document.querySelector("form")
    let nombreCreateProduct = document.querySelector("input#product-name")
    let descripcionCreateProduct = document.querySelector("input#product-description")
    formularioCreateProduct.addEventListener("submit", function (event) {
        let errors = []
        let errors2 = []
        if (nombreCreateProduct.value.length < 5) {
            errors.push("El nombre es obligatorio y debe tener al menos 5 caracteres")
        }
        if (descripcionCreateProduct.value.length < 20) {
            errors2.push("La descripcion debe tener al menos 20 caracteres")
        }
        console.log(errors)
        console.log(errors2)
        if (errors.length > 0) {
            let errorsNombreCreateProduct = document.querySelector("div.errorsNombreCreateProduct ul")
            errorsNombreCreateProduct.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                errorsNombreCreateProduct.innerHTML += "<li>" + errors[i] + "</li>"//<--esta linea se cambiara pronto
            }
            if (errors2.length > 0) {
                let errorsDescripcionCreateProduct = document.querySelector("div.errorsDescripcionCreateProduct ul")
                errorsDescripcionCreateProduct.innerHTML = "";
                for (let i = 0; i < errors2.length; i++) {
                    errorsDescripcionCreateProduct.innerHTML += "<li>" + errors2[i] + "</li>"//<--esta linea se cambiara pronto
                }
            } else {
                formularioCreateProduct.submit();
            }
            
        }
    })

})
//TODO relacionado con front esta sujeto a cambios*/
