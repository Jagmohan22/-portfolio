document.addEventListener("DOMContentLoaded", function () {
  // Select the form
  const contactForm = document.querySelector(".contact-form");

  // Listen for form submission
  contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Display the data in console
      console.log("Contact Form Submitted!");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      // Optionally, reset the form after submission
      contactForm.reset();
  });
});
