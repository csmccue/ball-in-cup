// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // to make button:
const startButton = document.getElementById('start-button');
const oneButton = document.getElementById('one-button');
const twoButton = document.getElementById('two-button');
const threeButton = document.getElementById('three-button');
const retryButton = document.getElementById('retry-button');
const hidingPlaces = ['one', 'two', 'three'];

let totalGuesses = 0;
let correctGuesses = 0;
let wrongGuesses = 0;

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');
const perCent = document.getElementById('percent');

const choiceEl = document.getElementById('choice');
const answerEl = document.getElementById('answer');

const oneContainer = document.getElementById('one-container');
const twoContainer = document.getElementById('two-container');
const threeContainer = document.getElementById('three-container');

startButton.addEventListener ('click', () => {
// animation to put ball in cup
});

oneButton.addEventListener ('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    let answer = hidingPlaces[hidingSpot];
    console.log(answer);
    handleGuess(answer, 'one'); 
}
);

twoButton.addEventListener ('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    let answer = hidingPlaces[hidingSpot];
    console.log(answer);
    handleGuess(answer, 'two'); 
}
);
threeButton.addEventListener ('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    let answer = hidingPlaces[hidingSpot];
    console.log(answer);
    handleGuess(answer, 'three'); 
}
);

function handleGuess(correctSpot, userGuess) {
    console.log(correctSpot);
    console.log(userGuess);
    choiceEl.textContent = userGuess;
    answerEl.textContent = correctSpot;
    
    totalGuesses++;
    if (correctSpot === userGuess) {
        console.log('correct');
        correctGuesses++;
    } else {
        console.log('wrong');
    }
    wrongGuesses = totalGuesses - correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = wrongGuesses;
    winsEl.textContent = correctGuesses;
    perCent.textContent = Math.ceil(100 * correctGuesses / totalGuesses);
    let newEl = `${correctSpot}-container`;
    oneContainer.classList.remove('chip');
    twoContainer.classList.remove('chip');
    threeContainer.classList.remove('chip');
    console.log(newEl);
    // add chip
    if (newEl === 'one-container') {
        oneContainer.classList.add('chip');
    }     
    if (newEl === 'two-container') {
        twoContainer.classList.add('chip');
    }   
    if (newEl === 'three-container') {
        threeContainer.classList.add('chip');
    }

}
function resetStyles() {
    oneContainer.classList.remove('chip');
    twoContainer.classList.remove('chip');
    threeContainer.classList.remove('chip');   
}
retryButton.addEventListener ('click', () => {
    totalGuesses = 0;
    correctGuesses = 0;
    wrongGuesses = 0;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = wrongGuesses;
    winsEl.textContent = correctGuesses;
    perCent.textContent = 0;
    resetStyles();

}
);