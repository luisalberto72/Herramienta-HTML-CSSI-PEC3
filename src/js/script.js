// Obtener todas las miniaturas
/*const miniaturas = document.querySelectorAll('.galeria-miniaturas img');

// Agregar evento clic a cada miniatura
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        // Obtener la URL de la imagen grande desde el atributo data-imagen
        const imagenGrandeURL = this.getAttribute('data-imagen');

        // Obtener el elemento de la imagen grande
        const imagenGrande = document.querySelector('.imagen-grande img');

        // Cambiar la imagen grande por la imagen seleccionada
        imagenGrande.setAttribute('src', imagenGrandeURL);
    });
});*/

document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("carousel-item");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 5000); // Change image every 5 seconds
    }
});


