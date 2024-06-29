document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.product button');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });

    // Contact Form Submission
    const contactForm = document.querySelector('.contact-section form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});

