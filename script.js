const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    
    // Hover functionality (existing)
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });

    // Create popup elements
    const popup = document.createElement("div");
    const popupContent = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    let currentIndex = 0;

    // Setup popup structure
    popup.className = "popup";
    popupContent.className = "popup-content";
    prevBtn.className = "nav-btn prev";
    nextBtn.className = "nav-btn next";
    closeBtn.className = "close-btn";

    prevBtn.innerHTML = "&larr;";
    nextBtn.innerHTML = "&rarr;";
    closeBtn.innerHTML = "&times;";

    popupContent.appendChild(prevBtn);
    popupContent.appendChild(nextBtn);
    popupContent.appendChild(closeBtn);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    // Hover effect (existing)
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e, index) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });

        // New click functionality
        e.addEventListener("click", function() {
            currentIndex = index;
            const image = e.getAttribute("data-image");
            popupContent.style.backgroundImage = `url(${image})`;
            popup.style.display = "flex";
        });
    });

    // Navigation functions
    function showImage(index) {
        if (index >= 0 && index < elems.length) {
            currentIndex = index;
            const image = elems[currentIndex].getAttribute("data-image");
            popupContent.style.backgroundImage = `url(${image})`;
        }
    }

    // Event listeners for navigation
    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });

    // Close popup
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (popup.style.display === "flex") {
            if (e.key === "ArrowLeft") {
                showImage(currentIndex - 1);
            } else if (e.key === "ArrowRight") {
                showImage(currentIndex + 1);
            } else if (e.key === "Escape") {
                popup.style.display = "none";
            }
        }
    });
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 1500)
}

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navPart2 = document.getElementById('nav-part2');

    // Toggle mobile menu
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        menuButton.textContent = mobileMenu.classList.contains('active') ? 'Close' : 'Menu';
    });

    // Close mobile menu when resizing to desktop
    function handleResize() {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            menuButton.textContent = 'Menu';
        }
    }

    // Add resize event listener
    window.addEventListener('resize', handleResize);
});

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()