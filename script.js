const lowerBtn = document.getElementById("lowercase-btn");
const upperBtn = document.getElementById("uppercase-btn");
const capitaliseBtn = document.getElementById("capitalise-btn");
const result = document.getElementById("result");
const inputArea = document.getElementById("input");

function getLowercase(text) {
    result.textContent = text.toLowerCase();
}

function getUppercase(text) {
    result.textContent = text.toUpperCase();
}

function getCapitalised(text) {
    let array = text.split(" ");
    let allLower = array.map((word) => word.toLowerCase());
    let capitalArray = allLower.map((word) => word.replace(word[0], word[0].toUpperCase()));
    let final = capitalArray.join(" ");
    result.textContent = final;
}

lowerBtn.addEventListener("click", () => getLowercase(inputArea.value));
upperBtn.addEventListener("click", () => getUppercase(inputArea.value));
capitaliseBtn.addEventListener("click", () => getCapitalised(inputArea.value));