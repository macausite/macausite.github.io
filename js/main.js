// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website functionality
    initializeNav();
    initializeThemeToggle();
    initializeProjectFilters();
    initializeTestimonialSlider();
    initializeSmoothScrolling();
});

// Initialize navigation functionality
function initializeNav() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Change header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
}

// Initialize dark/light theme toggle
function initializeThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Initialize project filtering functionality
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = 1;
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = 0;
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Initialize testimonial slider
function initializeTestimonialSlider() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!testimonialItems.length) return;
    
    let currentIndex = 0;
    
    // Hide all testimonials except the first one
    testimonialItems.forEach((item, index) => {
        if (index !== 0) {
            item.style.display = 'none';
        }
    });
    
    // Function to show testimonial by index
    function showTestimonial(index) {
        // Hide all testimonials
        testimonialItems.forEach(item => {
            item.style.display = 'none';
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show selected testimonial
        testimonialItems[index].style.display = 'block';
        
        // Add active class to selected dot
        dots[index].classList.add('active');
        
        // Update current index
        currentIndex = index;
    }
    
    // Next testimonial
    nextBtn.addEventListener('click', function() {
        const newIndex = (currentIndex + 1) % testimonialItems.length;
        showTestimonial(newIndex);
    });
    
    // Previous testimonial
    prevBtn.addEventListener('click', function() {
        const newIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(newIndex);
    });
    
    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
        });
    });
    
    // Auto slide (uncomment to enable)
    // let slideInterval = setInterval(function() {
    //     const newIndex = (currentIndex + 1) % testimonialItems.length;
    //     showTestimonial(newIndex);
    // }, 5000);
}

// Initialize smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get header height for offset
                const headerHeight = document.getElementById('header').offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}
