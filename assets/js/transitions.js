// Page Transitions
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"]):not([href^="mailto"]):not([href^="tel"])');
    const transition = document.querySelector('.page-transition');

    // Check if the link is to another page on the same domain
    function isSameDomain(href) {
        return href && href.indexOf(window.location.host) !== -1 && !href.startsWith('javascript:');
    }

    links.forEach(link => {
        if (isSameDomain(link.href)) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // Show transition
                transition.style.opacity = '1';
                transition.style.pointerEvents = 'auto';
                
                // Wait for transition to complete
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            });
        }
    });

    // Hide transition when page loads
    setTimeout(() => {
        transition.style.opacity = '0';
        transition.style.pointerEvents = 'none';
    }, 500);
});