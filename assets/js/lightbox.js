document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-img" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Get all view project buttons
    const viewButtons = document.querySelectorAll('.portfolio-view');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.close-lightbox');

    // Add click event to each button
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the portfolio item
            const portfolioItem = this.closest('.portfolio-item');
            
            // Get the image source and alt text
            const imgSrc = portfolioItem.querySelector('img').src;
            const imgAlt = portfolioItem.querySelector('img').alt;
            const caption = portfolioItem.querySelector('h3').textContent;
            
            // Set lightbox content
            lightboxImg.src = imgSrc;
            lightboxImg.alt = imgAlt;
            lightboxCaption.textContent = caption;
            
            // Show lightbox
            lightbox.classList.add('active');
            
            // Prevent scrolling when lightbox is open
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside image
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