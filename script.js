// Пример простой анимации при скролле
document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    projectItems.forEach(item => {
        observer.observe(item);
    });
});

// Пример анимации кнопки отправки формы
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    
    this.textContent = 'Отправляется...';
    this.disabled = true;

    setTimeout(() => {
        alert('Форма отправлена!');
        this.textContent = 'Отправить сообщение';
        this.disabled = false;
    }, 2000);
});
