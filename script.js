// Display success message after form submission
if (window.location.search.includes("success=true")) {
    document.getElementById("success-message").style.display = "block";
}

//Dropdown Menu for mobile device(bootstrap) 
const mobileMenu = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}