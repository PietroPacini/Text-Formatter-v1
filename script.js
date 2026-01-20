const lowerBtn = document.getElementById("lowercase-btn");
const upperBtn = document.getElementById("uppercase-btn");
const capitaliseBtn = document.getElementById("capitalise-btn");
const capitaliseSentenceBtn = document.getElementById("sentence-capitalise-btn");
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

lowerBtn.addEventListener("click", () => getLowercase(inputArea.value));
upperBtn.addEventListener("click", () => getUppercase(inputArea.value));
capitaliseBtn.addEventListener("click", () => getCapitalised(inputArea.value));
capitaliseSentenceBtn.addEventListener("click", () => capitaliseSentence(inputArea.value));