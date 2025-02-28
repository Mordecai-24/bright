document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            header.classList.toggle('open');
        });
    }
});