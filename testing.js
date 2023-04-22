const textToType = "Leandro Zazzi";
const typingSpeed = 215; // in milliseconds
const targetElement = document.getElementById("typed-text");
const cursorElement = document.querySelector(".text-cursor");
let currentIndex = 0;

function typeText() {
    if (currentIndex < textToType.length) {
        targetElement.innerHTML = textToType.substring(0, currentIndex + 1);
        targetElement.appendChild(cursorElement); // Append the cursor at the end of the typed text
        currentIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});
