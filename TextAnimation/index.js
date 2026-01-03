const text = document.querySelector('.container h1');
const careers = ["Software Engineer", "Developer", "Freelancer"];
let careerIndex = 0; 
let characterIndex = 0;

function updateText() {
    text.innerHTML = `I am an ${careers[careerIndex].slice(0, characterIndex)}, Who Can Solve Complex Problems.`;
    characterIndex++;
    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        if (careerIndex === careers.length) {
            careerIndex = 0;
        }
        characterIndex = 0;
    }
    setTimeout(updateText, 200);
}

updateText();
