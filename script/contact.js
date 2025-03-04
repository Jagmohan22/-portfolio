document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your User ID
  emailjs.init("wQ-Y2YWYMBmCySJ3v"); // Replace with your actual User ID

  // Select the form
  const contactForm = document.querySelector(".contact-form");

  // Listen for form submission
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Display the data in the console
    console.log("Contact Form Submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Form data object for EmailJS
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs.send("service_rr8wseo", "template_whfk2ea", formData)
      .then(function (response) {
        alert("Message sent successfully! ");
        console.log("Email sent:", response);
        contactForm.reset(); // Clear form after sending
      })
      .catch(function (error) {
        alert("Failed to send message. ");
        console.error("Error:", error);
      });
  });
});
