document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navbar = document.querySelector('.navbar');

    toggleBtn.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    // Hide navbar when a link is clicked (for better UX)
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('show');
        });
    });
});