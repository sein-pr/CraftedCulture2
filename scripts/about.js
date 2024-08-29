
function toggleCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = cartModal.style.display === 'none' || !cartModal.style.display ? 'block' : 'none';
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    console.log('Elements found:', menuIcon, navLinks);

    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target) && window.innerWidth <= 767.98) {
            navLinks.style.display = 'none';
            navLinks.style.opacity = '0';
        }
    });

    // Show nav links on hover
    menuIcon.addEventListener('mouseover', function() {
        console.log('Mouseover on menuIcon');
        if (window.innerWidth <= 1024) {
            navLinks.style.display = 'flex';
            setTimeout(() => {
                navLinks.style.opacity = '1';
            }, 10);
        }
    });

    // Close nav links when mouse leaves the nav links
    navLinks.addEventListener('mouseleave', function() {
        console.log('Mouse leave from navLinks');
        if (window.innerWidth <= 1024) {
            navLinks.style.display = 'none';
            navLinks.style.opacity = '0';
        }
    });

    // Ensure nav links are visible on large screens
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            navLinks.style.display = 'flex';
            navLinks.style.opacity = '1';
        } else {
            navLinks.style.display = 'none';
            navLinks.style.opacity = '0';
        }
    });
} else {
    console.error('Menu icon or nav links not found on the page');
}

