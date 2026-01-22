const buttons = document.querySelectorAll(".btn");
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

function capitaliseSentence(text) {
    let lowerText = text.toLowerCase();
    let finalText = lowerText.replace(lowerText[0], lowerText[0].toUpperCase());
    for (let i = 2; i < finalText.length; i++) {
        if ((finalText[i - 2] === "." || finalText[i - 2] === "!" || finalText[i - 2] === "?") && finalText[i - 1] === " ") {
            finalText = finalText.slice(0, i) + finalText[i].toUpperCase() + finalText.slice(i + 1);
        }
    }
    result.textContent = finalText;
}

function emptyInputMessage(text) {
    if (!text) {
        result.textContent = "Missing input!";
        result.style.color = "red";
    } else {
        result.textContent = "";
        result.style.color = "darkblue";
    }
}

const actions = {
    "lowercase-btn": getLowercase,
    "uppercase-btn": getUppercase,
    "capitalise-btn": getCapitalised,
    "sentence-capitalise-btn": capitaliseSentence
};

buttons.forEach((button) => button.addEventListener("click", event => {
    const action = actions[event.target.id];
    if (action) {
        action(inputArea.value);
    }
}));
inputArea.addEventListener("input", () => emptyInputMessage(inputArea.value));