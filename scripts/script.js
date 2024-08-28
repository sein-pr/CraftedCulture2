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
    if (window.innerWidth <= 600) {
        navLinks.style.display = 'flex';
        navLinks.style.opacity = '1';
    }
});

menuIcon.addEventListener('mouseover', function() {
    if (window.innerWidth <= 1024) {
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
navLinks.addEventListener('mouseleave', function() {
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
        navLinks.style.display = 'none'; // Hide on small screens
    }
});

const contentData = {
    'best-sellers': [
        {
            imgSrc: '/assets/data/green-adventure_300x300.jpg',
            name: 'Green Adventure',
            price: '$10.00'
        },
        {
            imgSrc: '/assets/data/cow_e3860c30-3b1a-40b7-959e-6cd5bfe580c3_300x300.jpg',
            name: 'Cow',
            price: '$25.00'
        },
        {
            imgSrc: '/assets/data/bangles_2048x2048.jpg',
            name: 'Bangles',
            price: '$110.00'
        },
        
    ],
    'new-arrivals': [
        {
            imgSrc: '/assets/data/deep-in-thought_2048x2048.jpg',
            name: 'Deep In Thoughts',
            price: '$150.00'
        },
        {
            imgSrc: '/assets/data/grey_2048x2048.jpg',
            name: 'Grey',
            price: '$20.00'
        },
        // Add more items as needed
    ],
    'hot-sales': [
        {
            imgSrc: '/assets/data/circle-rhythm_300x300.jpg',
            name: 'Circle Rhythm',
            price: '$5.00'
        },
        {
            imgSrc: '/assets/data/Color your life (1).png',
            name: 'Color Your Life',
            price: '$7.00'
        },
        // Add more items as needed
    ]
};

function showSection(sectionId) {
    // Remove 'active' class from all buttons
    document.querySelectorAll('.btn span').forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    document.querySelector('.btn span[onclick="showSection(\'' + sectionId + '\')"]').classList.add('active');

    // Get the content for the selected section
    const items = contentData[sectionId];

    // Clear existing content
    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = '';

    // Populate content dynamically
    items.forEach(function(item) {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'item-container visible';

        // Check if the section is "New Arrivals" to add the badge
        const newBadge = sectionId === 'new-arrivals' ? '<div class="new-badge">New</div>' : '';

        itemContainer.innerHTML = `
            ${newBadge}
            <img src="${item.imgSrc}" alt="item">
            <div class="item-icons">
                <ul>
                    <li><i class="uil uil-shopping-bag"></i></li>
                    <li><i class="uil uil-heart"></i></li>
                    <li><i class="uil uil-eye"></i></li>
                </ul>
            </div>
            <p class="item-name">${item.name}</p>
            <p class="item-rating"></p>
            <p class="item-price">${item.price}</p>
        `;

        // Add the fade-in effect after a slight delay
        setTimeout(function() {
            itemContainer.classList.add('fade-in');
        }, 100);

        contentSection.appendChild(itemContainer);
    });
}


// Initially show Best Sellers section
showSection('best-sellers');


