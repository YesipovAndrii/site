document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel img');
    const navbar = document.querySelector('.navbar');

    if (carouselImages.length > 0) { // Проверяем наличие карусели
        let currentIndex = 0;

        function showNextImage() {
            carouselImages[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselImages.length;
            carouselImages[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 5000); // Смена изображений каждые 5 секунд
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('sticky-navbar');
        } else {
            navbar.classList.remove('sticky-navbar');
        }
    });
});
