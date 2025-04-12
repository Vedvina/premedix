// Add this function to handle page-specific initialization
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Remove all active classes first
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to current page link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Initialize components based on current page
    switch(currentPage) {
        case 'dashboard.html':
            // Initialize dashboard components
            new Analytics();
            break;
        case 'utilities.html':
            // Initialize utilities components
            new UtilitiesManager();
            break;
        case 'reports.html':
            // Initialize reports components
            new PrexAI();
            new Analytics();
            break;
        // Add cases for other pages
    }
}

// Call initializePage when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 