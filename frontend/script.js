document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle with Local Storage
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check saved theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "☀️"; 
    } else {
        themeToggle.textContent = "🌙";
    }

    // Toggle Theme
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "☀️"; 
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙";
        }
    });

    // Smooth Scroll for Login Button
    document.querySelectorAll(".scroll-link").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href") || this.dataset.target;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Login Form Submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email && password) {
                alert("Login Successful!");
                window.location.href = "dashboard.html";  // Redirect to the dashboard
            } else {
                alert("Please enter valid credentials.");
            }
        });
    }
});

// Apply Theme in Dashboard
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}
