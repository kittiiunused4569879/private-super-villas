document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("enquiryForm");
  const status = document.getElementById("statusMessage");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    button.disabled = true;
    button.innerText = "Sending...";
    status.innerText = "Sending your enquiry...";
    status.style.color = "#d4af37";

    emailjs.sendForm(
      "service_yqjfos7",
      "template_9cstnww",
      form
    ).then(
      () => {
        status.innerText = "Thank you. Our team will contact you shortly.";
        status.style.color = "green";
        button.disabled = false;
        button.innerText = "Submit Enquiry";
        form.reset();
      },
      () => {
        status.innerText = "Failed to send. Please try again.";
        status.style.color = "red";
        button.disabled = false;
        button.innerText = "Submit Enquiry";
      }
    );
  });

});
