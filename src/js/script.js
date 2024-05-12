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

function setupLikeButton(likeIconId, likeCountId) {
    //localStorage.clear();
    const likeIcon = document.getElementById(likeIconId);
    const likeCount = document.getElementById(likeCountId);

    let hasLiked = localStorage.getItem(`${likeIconId}-hasLiked`);
    let likes = parseInt(localStorage.getItem(`${likeIconId}-likes`)) || 0;

    if (hasLiked) {
        likeIcon.style.color = 'orange';
        likeIcon.disabled = true;
    }

    likeCount.textContent = likes;

    function handleClick(event) {
        event.preventDefault();
        if (!hasLiked) {
            likes++;
            localStorage.setItem(`${likeIconId}-likes`, likes);
            likeCount.textContent = likes;
            localStorage.setItem(`${likeIconId}-hasLiked`, true);
            likeIcon.style.color = 'orange';
            likeIcon.disabled = true;
            likeIcon.removeEventListener('click', handleClick);
        }
    }

    likeIcon.addEventListener('click', handleClick);
}

// Configurar botones de like
setupLikeButton('like-icon', 'like-count');
setupLikeButton('like-icon2', 'like-count2');
setupLikeButton('like-icon3', 'like-count3');
setupLikeButton('like-icon4', 'like-count4');
setupLikeButton('like-icon5', 'like-count5');
setupLikeButton('like-icon6', 'like-count6');
setupLikeButton('like-icon7', 'like-count7');
setupLikeButton('like-icon8', 'like-count8');