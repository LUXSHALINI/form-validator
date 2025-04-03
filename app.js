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

    function checkPasswordStrength(passwordValue) {
        if (!strengthMeter) return; 

        if (passwordValue.length < 6) {
            strengthMeter.style.background = "red"; 
            strengthMeter.textContent = "Weak";
        } else if (passwordValue.length < 8) {
            strengthMeter.style.background = "orange"; 
            strengthMeter.textContent = "Medium";
        } else if (passwordRegex.test(passwordValue)) {
            strengthMeter.style.background = "green";
            strengthMeter.textContent = "Strong";
        } else {
            strengthMeter.style.background = "orange"; 
            strengthMeter.textContent = "Medium";
        }
    }

    if (password) {
        password.addEventListener("input", () => {
            checkPasswordStrength(password.value);
        });
    }

    if (togglePassword) {
        togglePassword.addEventListener("click", () => {
            const isPasswordHidden = password.type === "password";
            password.type = isPasswordHidden ? "text" : "password";
            confirmPassword.type = isPasswordHidden ? "text" : "password";
            togglePassword.textContent = isPasswordHidden ? "Hide" : "Show";
        });
    }

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!usernameRegex.test(username.value)) {
                alert("Invalid username! Must be 3-15 alphanumeric characters.");
                return;
            }

            if (!emailRegex.test(email.value)) {
                alert("Invalid email format.");
                return;
            }

            if (!passwordRegex.test(password.value)) {
                alert("Password must be at least 8 characters and include a number, uppercase letter, and special character.");
                return;
            }

            if (password.value !== confirmPassword.value) {
                alert("Passwords do not match!");
                return;
            }


            localStorage.setItem("username", username.value);
            localStorage.setItem("email", email.value);

            successMessage.style.display = "block";
            successMessage.textContent = "Registration successful!";
            form.reset();
            strengthMeter.textContent = "";
            strengthMeter.style.background = "transparent";
        });
    }
});


