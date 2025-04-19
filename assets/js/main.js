document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav ul');
    
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate stats counter
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => {
            observer.observe(stat);
        });
    }

    function animateCounters() {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            const count = +stat.innerText;
            const increment = target / 100;
            
            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 20);
            } else {
                stat.innerText = target;
            }
        });
    }

    // Initialize animations on scroll
    initAnimations();
});

// Initialize animations when elements come into view
function initAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        observer.observe(element);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-img" src="" alt="">
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // Get all view buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.close-lightbox');
    
    // Add click event to each button
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.type-card');
            const imgSrc = card.querySelector('img').src;
            const altText = card.querySelector('img').alt;
            
            lightboxImg.src = imgSrc;
            lightboxImg.alt = altText;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});