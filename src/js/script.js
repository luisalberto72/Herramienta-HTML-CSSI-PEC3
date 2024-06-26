
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
setupLikeButton('like-icon1', 'like-count1');
setupLikeButton('like-icon2', 'like-count2');
setupLikeButton('like-icon3', 'like-count3');
setupLikeButton('like-icon4', 'like-count4');
setupLikeButton('like-icon5', 'like-count5');
setupLikeButton('like-icon6', 'like-count6');
setupLikeButton('like-icon7', 'like-count7');
setupLikeButton('like-icon8', 'like-count8');