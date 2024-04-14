// Obtener todas las miniaturas
const miniaturas = document.querySelectorAll(".galeria-miniaturas img");
// Agregar evento clic a cada miniatura
miniaturas.forEach((miniatura)=>{
    miniatura.addEventListener("click", function() {
        // Obtener la URL de la imagen grande desde el atributo data-imagen
        const imagenGrandeURL = this.getAttribute("data-imagen");
        // Obtener el elemento de la imagen grande
        const imagenGrande = document.querySelector(".imagen-grande img");
        // Cambiar la imagen grande por la imagen seleccionada
        imagenGrande.setAttribute("src", imagenGrandeURL);
    });
});

//# sourceMappingURL=index.09c24910.js.map
