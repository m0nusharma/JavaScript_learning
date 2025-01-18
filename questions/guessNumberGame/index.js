let rendomValue = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const Submit = document.querySelector('#subt');
const PreviousGuess = document.querySelector('.guesses');
const LifeRemain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartGame = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousValue = [];
let numGuess = 1;
let gameStart = true;

if (gameStart) {
  Submit.addEventListener('click', function (e) {
    e.preventDefault();
    const userValue = parseInt(userInput.value);
    Validation(userValue);
  });
}

function Validation(guess) {
  if (isNaN(guess)) {
    alert('Please enter a  Valid Number');
  } else if (guess < 1) {
    alert('Please enter a  greater than 1');
  } else if (guess > 100) {
    alert('Please enter a  less than 100');
  } else {
    previousValue.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsge(`GAME OVER: Ramdom number was ${rendomValue}`);
      endGame();
    } else {
      displayGuess(guess);
      checkValue(guess);
    }
  }
}

function checkValue(guess) {
  if (guess === rendomValue) {
    displayMsge(`Congrats, you guessed it right`);
    endGame();
    reStart()
  } else if (guess > rendomValue) {
    displayMsge(`Value is Too High.`);
  } else if (guess < rendomValue) {
    displayMsge(`Value is Too Low.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  PreviousGuess.innerHTML += `${guess}, `;
  numGuess++;
  LifeRemain.innerHTML = `${11 - numGuess}`;
}

function displayMsge(massage) {
  lowOrHi.innerHTML = `<h2>${massage}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id ="newGame">start New Game</h3>`;
  StartGame.appendChild(p);
  gameStart =  false;
  reStart();


}

function reStart() {
  const startGameBtn = document.querySelector('#newGame');
    startGameBtn.addEventListener("click", function (e) {
    rendomValue = parseInt(Math.random() * 100 + 1)
    previousValue= [];
    numGuess = 1;
    PreviousGuess.innerHTML = ''
    LifeRemain.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled');
    if (StartGame.contains(p)) {
      StartGame.removeChild(p);
    }
    gameStart = true;

  });
}
