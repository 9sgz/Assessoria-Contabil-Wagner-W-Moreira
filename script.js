// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = mobileNav.querySelectorAll('a');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple reveal animation on scroll using Intersection Observer API
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate
const animatableElements = document.querySelectorAll('.authority-card, .service-card, .section-header');

animatableElements.forEach((el, index) => {
    // Initial hidden state
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) ${index % 3 * 0.1}s`;

    // Observe element
    observer.observe(el);
});

// Make service cards clickable to redirect to the contact section
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = '#contato';
    });
});

