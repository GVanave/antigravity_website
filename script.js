// Mobile Menu Toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Offset for the fixed header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    });
});

// WhatsApp Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 1. Get values from the form
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const program = document.getElementById('program').value;
        const message = document.getElementById('message').value.trim();

        // 2. Format the message for WhatsApp
        let whatsappMessage = `*New Consultation Request*%0A%0A`;
        whatsappMessage += `*Name:* ${name}%0A`;
        whatsappMessage += `*Email:* ${email}%0A`;
        whatsappMessage += `*Phone:* ${phone}%0A`;
        whatsappMessage += `*Program:* ${program}%0A`;
        
        if (message) {
            whatsappMessage += `*Query:* ${message}%0A`;
        }

        // 3. Define the destination WhatsApp number (Include country code, no + or spaces)
        const whatsappNumber = "919689908757"; 

        // 4. Create the URL and redirect
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Optional: Reset form after sending
        contactForm.reset();
    });
}
