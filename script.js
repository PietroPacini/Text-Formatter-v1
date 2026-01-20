const lowerBtn = document.getElementById("lowercase-btn");
const upperBtn = document.getElementById("uppercase-btn");
const result = document.getElementById("result");
const inputArea = document.getElementById("input");

function getLowercase(text) {
    result.textContent = text.toLowerCase();
}

function getUppercase(text) {
    result.textContent = text.toUpperCase();
}

lowerBtn.addEventListener("click", () => getLowercase(inputArea.value));
upperBtn.addEventListener("click", () => getUppercase(inputArea.value));