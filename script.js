document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling
  document.querySelectorAll('nav a').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Contact form submission
  var contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Send form data to server or perform desired action
    // ...
    // Show success message or redirect to thank you page
    contactForm.reset();
    alert('Thank you for your message!');
  });
});
