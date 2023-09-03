// Get references to the button and contact form container
const openContactFormButton = document.getElementById("open-contact-form");
const contactFormContainer = document.getElementById("contact-form-container");

// Add an event listener to the button
openContactFormButton.addEventListener("click", () => {
  // Toggle the visibility of the contact form container
  if (contactFormContainer.style.display === "none" || contactFormContainer.style.display === "") {
    contactFormContainer.style.display = "block";
  } else {
    contactFormContainer.style.display = "none";
  }
);
