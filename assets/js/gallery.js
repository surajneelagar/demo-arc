// Gallery Lightbox
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const clone = img.cloneNode();
            
            // Create lightbox content
            lightbox.innerHTML = '';
            lightbox.appendChild(clone);
            
            // Add caption if available
            const caption = this.querySelector('.gallery-overlay h3');
            if (caption) {
                const captionElement = document.createElement('p');
                captionElement.textContent = caption.textContent;
                lightbox.appendChild(captionElement);
            }
            
            // Show lightbox
            lightbox.classList.add('active');
            
            // Close button
            const closeBtn = document.createElement('span');
            closeBtn.innerHTML = '&times;';
            closeBtn.className = 'close-lightbox';
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.appendChild(closeBtn);
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    lightbox.addEventListener('click', function(e) {
        if (e.target !== e.currentTarget) return;
        closeLightbox();
    });

    // Add styles for lightbox
    const style = document.createElement('style');
    style.textContent = `
        #lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }
        
        #lightbox.active {
            opacity: 1;
            pointer-events: auto;
        }
        
        #lightbox img {
            max-width: 90%;
            max-height: 80vh;
            margin-bottom: 20px;
        }
        
        #lightbox p {
            color: white;
            font-size: 1.5rem;
            text-align: center;
            max-width: 80%;
        }
        
        .close-lightbox {
            position: absolute;
            top: 20px;
            right: 20px;
            color: white;
            font-size: 3rem;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});