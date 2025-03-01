document.addEventListener('DOMContentLoaded', function() {
    // Show preloader
    const preloader = document.getElementById('preloader');
    const PRELOADER_DURATION = 1000; // 2 seconds - adjust this value as needed
    
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            header.classList.toggle('open');
        });
    }

    // Handle internal page links (smooth scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle external page links (page transition)
    document.querySelectorAll('a:not([href^="#"])').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            
            // Show preloader before navigation
            if (preloader) {
                preloader.style.opacity = '1';
                preloader.style.display = 'flex';
            }
            
            // Add fade-out effect
            document.body.classList.add('fade-out');

            // Navigate to new page after transition
            setTimeout(() => {
                window.location.href = href;
            }, PRELOADER_DURATION);
        });
    });

    // Hide preloader when page is fully loaded
    window.addEventListener('load', function() {
        if (preloader) {
            setTimeout(() => {
                preloader.style.opacity = '1';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 200); // Fade out transition duration
            }, PRELOADER_DURATION);
        }
        document.body.classList.remove('fade-out');
    });
});

function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if the element is within the viewport
        if (elementTop < windowHeight && elementBottom >= 0) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll); // Trigger on page load as well