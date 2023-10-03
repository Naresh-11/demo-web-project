document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    // Toggle the "active" class when clicking the menu toggle
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Hide the navigation options when clicking anywhere on the page
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".header")) {
            nav.classList.remove("active");
        }
    });

    // Hide the navigation options when clicking a navigation link
    const navLinks = document.querySelectorAll(".nav li a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    });
});


//  Filter xss 
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Regular expressions for basic input validation
    var namePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!name.match(namePattern) || !email.match(emailPattern) || message.length === 0) {
        var alertPop = document.getElementById("alert-pop");
        alertPop.classList.add("show"); // Show the alert pop
        setTimeout(function () {
            alertPop.classList.remove("show"); // Hide the alert pop after a delay
        }, 3000); // Adjust the delay in milliseconds (e.g., 3000ms = 3 seconds)
        return false;
    }

    // If all inputs are valid, allow the form submission
    return true;


}
