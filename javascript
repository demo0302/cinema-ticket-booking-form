// Get all input elements
const inputFields = document.querySelectorAll("input");

let isTyping = false;

// Function to apply the neon breathing effect
function applyNeonBreathingEffect(input){
    input.classList.add("typing");
} 

// Function to remove the neon breathing effect
function removeNeonBreathingEffect(input){
    input.classList.remove("typing");
}

// Event listners for all input fields
inputFields.forEach((input) => {
    // Event listener for input focus
    input.addEventListener("focus", () => {
        if (!isTyping) {
            // Apply neon glow effect when the input is in focus
            input.classList.add("focus");
        }
    });

    // Event listener for input blur
    input.addEventListener("blur", () => {
        // Remove neon glow effect when the input loses focus
        input.classList.remove("focus")
    });

    // Event listener for input typing
    input.addEventListener("input", () => {
        if (!isTyping){
            isTyping = true;
            applyNeonBreathingEffect(input); // Apply neon breathing effect when the user starts typing
        }
    });

    // Event listener to detect when the user is not typing
    input.addEventListener("blur", () => {
        isTyping = false;
        removeNeonBreathingEffect(input); // Remove the neon breathing effect when the user stops typing
    });

});

// Function to Show and Hide Password
function togglePassword(){
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password"){
        passwordField.type = "text";
        document.querySelector(".show-password").textContent = "Hide";
    } else {
        passwordField.type = "password";
        document.querySelector(".show-password").textContent = "Show";
    }
}
