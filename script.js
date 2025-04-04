// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-text, .service-card, .skill-item, .portfolio-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial animation check
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Dark mode toggle
const darkModeToggle = document.createElement('div');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(darkModeToggle);

let isDarkMode = true; // Default to dark mode

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode');
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    
    // Update CSS variables
    if (isDarkMode) {
        document.documentElement.style.setProperty('--background-color', '#1e1e2e');
        document.documentElement.style.setProperty('--secondary-color', '#2a2a3a');
        document.documentElement.style.setProperty('--text-color', '#f4f4f4');
    } else {
        document.documentElement.style.setProperty('--background-color', '#f4f4f4');
        document.documentElement.style.setProperty('--secondary-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#1e1e2e');
    }
});

// Portfolio item hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.portfolio-overlay').style.transform = 'translateY(0)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('.portfolio-overlay').style.transform = 'translateY(100%)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-text, .service-card, .skill-item, .portfolio-item').forEach(element => {
    observer.observe(element);
});
