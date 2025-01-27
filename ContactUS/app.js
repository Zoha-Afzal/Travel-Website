
document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const homeLinkFooter = document.getElementById('home-link-footer');
    const aboutLinkFooter = document.getElementById('about-link-footer');
    const contactLinkFooter = document.getElementById('contact-link-footer');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../index.html';
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../About/about.html';
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '/contact.html';
    });

    homeLinkFooter.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../index.html';
    });

    aboutLinkFooter.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../About/about.html';
    });

    contactLinkFooter.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '/contact.html';
    });
});


document.addEventListener("DOMContentLoaded", () => {
   
    
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
           
            
            event.preventDefault();

            
            
            const nameElement = document.getElementById("name");
            const emailElement = document.getElementById("email");
            const messageElement = document.getElementById("message");

            if (!nameElement || !emailElement || !messageElement) {
                alert("Form elements not found. Please check the form structure.");
                return;
            }

            const name = nameElement.value.trim();
            const email = emailElement.value.trim();
            const message = messageElement.value.trim();

            
            
            if (!name || !email || !message) {
                alert("All fields are required. Please fill out the form completely.");
                return;
            }

            if (!isValidEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

           
            
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset(); 
            
        });
    }

    
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
