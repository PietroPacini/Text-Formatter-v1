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
    const final = text.toLowerCase().split(" ").map((word) => {
        if (!word) return "";
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
    result.textContent = final;
}

function capitaliseSentence(text) {
    let chars = text.toLowerCase().trim().split("");
    if (chars[0]) {
        chars[0] = chars[0].toUpperCase();
    }
    for (i = 1; i < chars.length; i++) {
        if (chars[i] === "." || chars[i] === "!" || chars[i] === "?") {
            let j = i + 1
            while (chars[j] === " " && j < chars.length) {
                j++;
            }
            if (chars[j]) {
                chars[j] = chars[j].toUpperCase();
            }
        }
    }
    result.textContent = chars.join("");
}

function isInputEmpty(text) {
    if (!text) return true 
    else return false;
}

const actions = {
    "lowercase-btn": getLowercase,
    "uppercase-btn": getUppercase,
    "capitalise-btn": getCapitalised,
    "sentence-capitalise-btn": capitaliseSentence
};

buttons.forEach((button) => button.addEventListener("click", event => {
    if (!inputArea.value) {
        alert("Missing input!");
    }
    const action = actions[event.target.id];
    if (action) {
        action(inputArea.value);
    }
}));