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



//localStorage.removeItem('hasLiked');
//localStorage.removeItem('hasIncremented');
//localStorage.removeItem('likes');
//localStorage.removeItem('hasLiked2');
//localStorage.removeItem('hasIncremented2');
//localStorage.removeItem('likes2');

// Obtener el ícono de "like-icon" y el contador de like-count
const likeIcon = document.getElementById('like-icon');
const likeCount = document.getElementById('like-count');

// Verificar si el usuario ya ha dado un like
const hasLiked = localStorage.getItem('hasLiked');

// Verificar si ya hay un contador de likes almacenado en el localStorage
let likes = parseInt(localStorage.getItem('likes')) || 0;

// Si el usuario ya ha dado un like, deshabilitar el botón de like
if (hasLiked) {
    likeIcon.style.color = 'orange'; // Cambiar el color del ícono a naranja
    likeIcon.disabled = true;
}

// Mostrar el contador de likes
likeCount.textContent = likes;

// Definir la función para manejar el clic en el botón de like
function handleClick(event) {
    // Prevenir el comportamiento por defecto del evento de clic
    event.preventDefault();

    // Verificar si el usuario ya ha dado un like
    if (!hasLiked) {
        // Incrementar el contador de likes
        likes++;
        localStorage.setItem('likes', likes);
        likeCount.textContent = likes;

        // Marcar al usuario como que ya ha dado un like
        localStorage.setItem('hasLiked', true);

        // Deshabilitar el botón de like
        likeIcon.style.color = 'orange'; // Cambiar el color del ícono a naranja
        likeIcon.disabled = true;
        
        // Remover el event listener después del primer clic
        likeIcon.removeEventListener('click', handleClick);
    }
}

// Manejar el clic en el botón de like
likeIcon.addEventListener('click', handleClick);


// Obtener el ícono de "like-icon2" y el contador de like-count2
const likeIcon2 = document.getElementById('like-icon2');
const likeCount2 = document.getElementById('like-count2');

// Verificar si el usuario ya ha dado un like
const hasLiked2 = localStorage.getItem('hasLiked2');

// Verificar si ya hay un contador de likes almacenado en el localStorage
let likes2 = parseInt(localStorage.getItem('likes2')) || 0;

// Si el usuario ya ha dado un like, deshabilitar el botón de like
if (hasLiked2) {
    likeIcon2.style.color = 'orange'; // Cambiar el color del ícono a naranja
    likeIcon2.disabled = true;
}

// Mostrar el contador de likes
likeCount2.textContent = likes2;

// Definir la función para manejar el clic en el botón de like
function handleClick2(event2) {
    // Prevenir el comportamiento por defecto del evento de clic
    event2.preventDefault();

    // Verificar si el usuario ya ha dado un like
    if (!hasLiked2) {
        // Incrementar el contador de likes
        likes2++;
        localStorage.setItem('likes2', likes2);
        likeCount2.textContent = likes2;

        // Marcar al usuario como que ya ha dado un like
        localStorage.setItem('hasLiked2', true);

        // Deshabilitar el botón de like
        likeIcon2.style.color = 'orange'; // Cambiar el color del ícono a naranja
        likeIcon2.disabled = true;
        
        // Remover el event listener después del primer clic
        likeIcon2.removeEventListener('click', handleClick2);
    }
}

// Manejar el clic en el botón de like
likeIcon2.addEventListener('click', handleClick2);



// Obtener el ícono de "like-icon3" y el contador de like-count3
const likeIcon3 = document.getElementById('like-icon3');
const likeCount3 = document.getElementById('like-count3');

// Verificar si el usuario ya ha dado un like
const hasLiked3 = localStorage.getItem('hasLiked3');

// Verificar si ya hay un contador de likes almacenado en el localStorage
let likes3 = parseInt(localStorage.getItem('likes3')) || 0;

// Si el usuario ya ha dado un like, deshabilitar el botón de like
if (hasLiked3) {
    likeIcon3.style.color = 'orange'; // Cambiar el color del ícono a naranja
    likeIcon3.disabled = true;
}

// Mostrar el contador de likes
likeCount3.textContent = likes3;

// Definir la función para manejar el clic en el botón de like
function handleClick3(event3) {
    // Prevenir el comportamiento por defecto del evento de clic
    event3.preventDefault();

    // Verificar si el usuario ya ha dado un like
    if (!hasLiked3) {
        // Incrementar el contador de likes
        likes3++;
        localStorage.setItem('likes3', likes3);
        likeCount3.textContent = likes3;

        // Marcar al usuario como que ya ha dado un like
        localStorage.setItem('hasLiked3', true);

        // Deshabilitar el botón de like
        likeIcon3.style.color = 'orange'; // Cambiar el color del ícono a naranja
        likeIcon3.disabled = true;
        
        // Remover el event listener después del primer clic
        likeIcon3.removeEventListener('click', handleClick3);
    }
}

// Manejar el clic en el botón de like
likeIcon3.addEventListener('click', handleClick3);

// Obtener el ícono de "like-icon4" y el contador de like-count4
const likeIcon4 = document.getElementById('like-icon4');
const likeCount4 = document.getElementById('like-count4');

// Verificar si el usuario ya ha dado un like
const hasLiked4 = localStorage.getItem('hasLiked4');

// Verificar si ya hay un contador de likes almacenado en el localStorage
let likes4 = parseInt(localStorage.getItem('likes4')) || 0;

// Si el usuario ya ha dado un like, deshabilitar el botón de like
if (hasLiked4) {
    likeIcon4.style.color = 'orange'; // Cambiar el color del ícono a naranja
    likeIcon3.disabled = true;
}

// Mostrar el contador de likes
likeCount4.textContent = likes4;

// Definir la función para manejar el clic en el botón de like
function handleClick3(event4) {
    // Prevenir el comportamiento por defecto del evento de clic
    event4.preventDefault();

    // Verificar si el usuario ya ha dado un like
    if (!hasLiked4) {
        // Incrementar el contador de likes
        likes4++;
        localStorage.setItem('likes4', likes4);
        likeCount4.textContent = likes4;

        // Marcar al usuario como que ya ha dado un like
        localStorage.setItem('hasLiked4', true);

        // Deshabilitar el botón de like
        likeIcon4.style.color = 'orange'; // Cambiar el color del ícono a naranja
        likeIcon4.disabled = true;
        
        // Remover el event listener después del primer clic
        likeIcon4.removeEventListener('click', handleClick4);
    }
}

// Manejar el clic en el botón de like
likeIcon4.addEventListener('click', handleClick4);