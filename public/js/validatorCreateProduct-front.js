window.addEventListener("load", function () {
    let formularioCreateProduct = document.querySelector("form")
    let nombreCreateProduct = document.querySelector("input#product-name")
    let descripcionCreateProduct = document.querySelector("input#product-description")
    let imagenCreateProduct = document.querySelector("input#product-image")
    formularioCreateProduct.addEventListener("submit", function (event) {
        let errors = []
        if (nombreCreateProduct.value.length < 5) {
            errors.push("El nombre es obligatorio y debe tener al menos 5 caracteres")
        }
        if (descripcionCreateProduct.value.length < 20) {
            errors.push("La descripcion debe tener al menos 20 caracteres")
        }
        if(imagenCreateProduct.value == imagenCreateProduct) {
            errors.push("Debes subir una imagen valida")
        }
        //let extensionImagen = ['jpg', 'jpeg', 'png', 'gif'];
        //if(imagenCreateProduct == extensionImagen) {
        //    errors.push("Instaste una imagen")
        //} else {
        //    errors.push("ingrese una imagen valida")
        //}
        //if(imagenCreateProduct == extensionImagen) {
        //    errors.push("bien hecho")
        //}
        console.log(imagenCreateProduct)
        console.log(errors)
        if (errors.length > 0) {
            let errorsCreateProduct = document.querySelector("div.errorsCreateProduct ul")
            errorsCreateProduct.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                errorsCreateProduct.innerHTML += "<li>" + errors[i] + "</li>"//<--esta linea se cambiara pronto
            } 
        } else {
            formularioCreateProduct.submit();
        }
    })
})
//TODO relacionado con front esta sujeto a cambios
