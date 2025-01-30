function makeNavbarSticky(navbar) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('sticky-navbar');
        } else {
            navbar.classList.remove('sticky-navbar');
        }
    });
}

function initSlideshow(slideshowContainer) {
    const slideshowImages = slideshowContainer.querySelectorAll('img');

    if (slideshowImages.length > 0) { // Проверяем наличие изображений для слайдшоу
        let currentIndex = 0;

        function showNextImage() {
            slideshowImages[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slideshowImages.length;
            slideshowImages[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 5000); // Смена изображений каждые 5 секунд
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        makeNavbarSticky(navbar);
    }

    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        initSlideshow(slideshowContainer);
    }

    const loginButton = document.getElementById('login');
    const logoutButton = document.getElementById('logout');
    const editButton = document.getElementById('edit');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        logoutButton.parentElement.style.display = 'inline';
        loginButton.parentElement.style.display = 'none';
    });

    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        logoutButton.parentElement.style.display = 'none';
        loginButton.parentElement.style.display = 'inline';
    });
});
