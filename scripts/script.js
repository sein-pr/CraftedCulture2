let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const indicators = document.querySelectorAll('.indicator');

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

function setCurrentImage(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100; // Move by 100% of the width of one image
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// }

// Auto slide
setInterval(showNextImage, 5000); // Change image every 3 seconds

document.getElementById('shopNow').addEventListener('click', function() {
    alert('Redirecting to shop...');
    // Here you can add logic to redirect to the shop page
    // window.location.href = 'shop.html';
});

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

function handleClickOutside(event) {
    if (!menuIcon.contains(event.target) && !navLinks.contains(event.target) && window.innerWidth <= 767.98) {
        navLinks.style.display = 'none';
        navLinks.style.opacity = '0';
    }
}

document.addEventListener('click', handleClickOutside);

// Show nav links on hover
menuIcon.addEventListener('mouseover', function() {
    if (window.innerWidth <= 767.98) {
        navLinks.style.display = 'flex';
        navLinks.style.opacity = '1';
    }
});

// Close nav links when mouse leaves the nav links
navLinks.addEventListener('mouseleave', function() {
    if (window.innerWidth <= 767.98) {
        navLinks.style.display = 'none';
        navLinks.style.opacity = '0';
    }
});

// Ensure nav links are visible on large screens
window.addEventListener('resize', function() {
    if (window.innerWidth > 767.98) {
        navLinks.style.display = 'flex';
        navLinks.style.opacity = '1';
    } else {
        navLinks.style.display = 'none'; // Hide on small screens
    }
});