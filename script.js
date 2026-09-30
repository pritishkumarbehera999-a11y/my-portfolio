let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Mobile menu toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll karne par menu band ho jana
window.onscroll = () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};