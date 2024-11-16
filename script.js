// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50, // Offset for header
        behavior: "smooth"
    });
}

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form inputs (you can extend this to more sophisticated validation)
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // For now, we'll log the form data to the console (later you could integrate with a backend or API)
    console.log("Form Submitted:", { name, email, message });

    // Show success message
    alert("Your message has been sent successfully!");

    // Optionally, reset the form fields after submission
    document.getElementById('contactForm').reset();
});
