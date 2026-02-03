const words = [
    "Hi",
    "I am Syitarthaa, Running for Acad Exco",
    "This is supposedly the website I am working on.",
    "I have added 2 groups below, 1 to check out how the files for KYRI will be available to everyone,",
    "and then 2 which I am not sure if it works"
];

const textElement = document.getElementById("terminal-text");

let wordIndex = 0;
let charIndex = 0;

function typeWord() {
    if (wordIndex >= words.length) return;

    if (charIndex < words[wordIndex].length) {
        textElement.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeWord, 60);
    } else {
        textElement.textContent += "\n\n"; // line break
        charIndex = 0;
        wordIndex++;
        setTimeout(typeWord, 500);
    }
}

typeWord();
