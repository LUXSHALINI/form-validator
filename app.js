document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const successMessage = document.getElementById("successMessage");
    const strengthMeter = document.getElementById("strengthMeter");
    const togglePassword = document.querySelector(".toggle-password");

    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    function validateInput(input, regex) {
        if (!regex.test(input.value)) {
            input.style.border = "2px solid red";
            return false;
        } else {
            input.style.border = "2px solid green";
            return true;
        }
    }

    function checkPasswordStrength(password) {
        if (password.length < 6) {
            strengthMeter.style.background = "red"; 
            strengthMeter.textContent = "Weak";
        } else if (password.length >= 6 && password.length < 8) {
            strengthMeter.style.background = "orange"; 
            strengthMeter.textContent = "Medium";
        } else if (passwordRegex.test(password)) {
            strengthMeter.style.background = "green";
            strengthMeter.textContent = "Strong";
        } else {
            strengthMeter.style.background = "orange"; 
            strengthMeter.textContent = "Medium";
        }
    }

    password.addEventListener("input", () => {
        checkPasswordStrength(password.value);
    });

    togglePassword.addEventListener("click", () => {
        const isPasswordHidden = password.type === "password";
        password.type = isPasswordHidden ? "text" : "password";
        confirmPassword.type = isPasswordHidden ? "text" : "password";
        togglePassword.textContent = isPasswordHidden ? "Hide" : "Show";
    });
});

