document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    imageContainer.appendChild(homeLink);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            imageContainer.classList.add('scroll');
            document.querySelector('footer').classList.add('sticky-footer');
        } else {
            imageContainer.classList.remove('scroll');
            document.querySelector('footer').classList.remove('sticky-footer');
        }
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
