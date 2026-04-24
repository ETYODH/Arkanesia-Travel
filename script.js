// Smooth scrolling for anchor links with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking (for responsive)
            const navLinks = document.querySelector('.nav-links');
            if (window.innerWidth <= 768 && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('show');
        }
    }
});

// Scroll reveal animation
const observerOptions = { 
    threshold: 0.1, 
    rootMargin: "0px 0px -20px 0px" 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Apply animation to all cards
const animatedElements = document.querySelectorAll('.armada-card, .destinasi-card, .estimasi-card, .keunggulan-item, .testi-card');
animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(25px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
});

// Image error handling - fallback if images fail to load
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        console.log('Image failed to load:', this.src);
        if (!this.src.includes('placehold.co')) {
            this.src = 'https://placehold.co/600x400/2c3e50/ffffff?text=Image+Not+Found';
        }
    });
});

// Add loading lazy to all images
document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    } else {
        navbar.style.background = '#ffffffdd';
        navbar.style.backdropFilter = 'blur(14px)';
    }
});

// Handle window resize - reset mobile menu state
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
    } else {
        navLinks.style.display = ''; // Reset to CSS default
        navLinks.style.flexDirection = '';
    }
});

console.log("Arkanesia Travel | Armada: Big Bus 60-50-32 Seat | Medium Bus 18 Seat | Elf 15 Seat | Hiace Premium | Destinasi Wisata & Ziarah | Reservasi: 0822-9887-2179");