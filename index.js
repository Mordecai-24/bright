document.addEventListener('DOMContentLoaded', function() {
    // Example: Adding a click event to the "Read the Latest Trends" button
    const readTrendsBtn = document.querySelector('.btn');
    if (readTrendsBtn) {
        readTrendsBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action
            alert('Navigating to the latest trends section!');
            // You can add code here to scroll to the articles section or navigate to the articles page
        });
    }

    // Example: Handling newsletter signup form submission
    const newsletterForm = document.querySelector('.newsletter-signup form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput) {
                const email = emailInput.value;
                if (email) {
                    alert('Subscribed with email: ' + email);
                    // Here, you might want to send the email to a server for processing
                } else {
                    alert('Please enter a valid email address.');
                }
            }
        });
    }

    // Example: Implementing a dark/light mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.classList.add('dark-mode-toggle');
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Store the user's preference in local storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Check local storage for theme preference on page load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});