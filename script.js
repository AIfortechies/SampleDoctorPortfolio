// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Form Validation and WhatsApp Integration
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;
    
    // Simple validation
    if (!name || !contact || !email || !date || !time || !service) {
        alert('Please fill in all fields');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Validate phone number (simple validation for demonstration)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(contact.replace(/\D/g, ''))) {
        alert('Please enter a valid phone number (10-15 digits)');
        return;
    }
    
    // Create WhatsApp message
   const message = `Hello Dr. Abosahma, I would like to book an appointment.

Name: ${name}
Contact: ${contact}
Email: ${email}
Service: ${service}
Preferred Date: ${date}
Preferred Time: ${time}`;

const whatsappURL = `https://wa.me/919044039661?text=${encodeURIComponent(message)}`;

window.open(whatsappURL, '_blank');

    
    // WhatsApp API URL (using free URL API)
    const whatsappURL = `https://wa.me/15551234567?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Show confirmation message
    alert('Appointment details sent via WhatsApp! Dr. Smith will confirm your appointment shortly.');
    
    // Reset form
    this.reset();
});

// Set min date for appointment booking to today
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});

// Testimonial Slider (Simple Implementation)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });
    
    testimonials[index].style.display = 'block';
}

// Initialize testimonial display
if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);
    
    // Auto slide testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode Toggle (Optional Feature)
// Select the existing dark mode toggle button from the HTML
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const darkModeIcon = darkModeToggle ? darkModeToggle.querySelector('i') : null;

// Check for saved theme preference or respect OS preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem('theme');

// If the user's preference is in storage and it's dark, toggle the dark class
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    if (darkModeIcon) {
        darkModeIcon.className = 'fas fa-sun';
    }
}

// Toggle dark mode when the button is clicked
if (darkModeToggle && darkModeIcon) {
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update button icon
        if (document.body.classList.contains('dark-mode')) {
            darkModeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Portfolio Item Hover Effect Enhancement
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const overlay = this.querySelector('.portfolio-overlay');
        overlay.style.transform = 'translateY(0)';
    });
    
    item.addEventListener('mouseleave', function() {
        const overlay = this.querySelector('.portfolio-overlay');
        overlay.style.transform = 'translateY(100px)';
    });

});
