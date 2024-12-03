// Script for displaying an alert message on form submission
document.addEventListener("DOMContentLoaded", () => {
  const reservationForm = document.querySelector("#form form");
  const contactForm = document.querySelector("#form1 form");

  // Reservation form submission event
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for your reservation! We will contact you shortly.");
    reservationForm.reset(); // Reset the form after submission
  });

  // Contact form submission event
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    contactForm.reset(); // Reset the form after submission
  });

  // Navbar icon toggle (for smaller screens)
  const navIcon = document.querySelector("#icon");
  const navLinks = document.querySelector(".link");
  navIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Add-to-cart button functionality
  const addToCartButtons = document.querySelectorAll(".product-item .btn");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });

  // Subscription button functionality in footer
  const subscribeButton = document.querySelector("#foot .container a[href='#']");
  const emailInput = document.querySelector("#foot .container input[name='email']");
  subscribeButton.addEventListener("click", (event) => {
    event.preventDefault();
    const email = emailInput.value;
    if (validateEmail(email)) {
      alert("Thank you for subscribing to our newsletter!");
      emailInput.value = ""; // Clear the email input
    } else {
      alert("Please enter a valid email address.");
    }
  });
});

// Function to validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
