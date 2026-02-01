const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const inputArea = document.getElementById("input");

function getLowercase(text) {
    result.textContent = text.toLowerCase();
}

function getUppercase(text) {
    result.textContent = text.toUpperCase();
}

//Create an array of words, capitalise each word, then join in a string.
function getCapitalised(text) {
    const final = text.toLowerCase().split(" ").filter((word) => word).map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
    result.textContent = final;
}

//Create an array of charachters, capitalize only the first charachter or if preceded by ". ", "! " or "? ", then join in a string.
function capitaliseSentence(text) {
    let chars = text.toLowerCase().trim().split("");
    chars[0] = chars[0].toUpperCase();
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

const actions = {
    "lowercase-btn": getLowercase,
    "uppercase-btn": getUppercase,
    "capitalise-btn": getCapitalised,
    "sentence-capitalise-btn": capitaliseSentence
};

// First handle an empty input. If the input is not empty, execute the function that corresponds to the clicked button.
buttons.forEach((button) => button.addEventListener("click", event => {
    if (!inputArea.value) {
        alert("Missing input!");
    }
    const action = actions[event.target.id];
    if (action) {
        action(inputArea.value);
    }
}));