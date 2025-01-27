document.addEventListener("DOMContentLoaded", function() {
    const backgroundImage = document.querySelector('.background-image');
    backgroundImage.style.backgroundImage = "url('image/image 2.png')"; // Replace with your background image path
});
document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const homeLinkFooter = document.getElementById('home-link-footer');
    const aboutLinkFooter = document.getElementById('about-link-footer');
    const contactLinkFooter = document.getElementById('contact-link-footer');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '/index.html';
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './About/about.html';
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './ContactUS/contact.html';
    });

    homeLinkFooter.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '/index.html';
    });

    aboutLinkFooter.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './About/about.html';
    });

    contactLinkFooter.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './ContactUS/contact.html';
    });
});