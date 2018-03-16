//set values for game
let min = 1;
let max = 10;
let winNum = getRandom(min,max);
let guessesLeft = 3;


function getRandom(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);    
}


// DOM elements
const gameWrapper = document.getElementById("game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.getElementById("guess-btn");
const guessInput = document.getElementById("guess-input");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;


//listen for click and chceck guess
guessBtn.addEventListener("click", function() {

  let guess = parseInt(guessInput.value);

   if(guess === winNum) {
     game(true,`Yay, you won, ${winNum} is correct. Congrats!`)
     guessInput.disabled = true;
     playAgain();
   } else if (isNaN(guess) || guess < min || guess > max) {
     game(false, `Please enter the number between ${min} and ${max}`);
  }  else {
     guessesLeft = guessesLeft -1; 
        if(guessesLeft === 0) {
          game(false,`Game over. The correct number was ${winNum}. Try again`)
          guessInput.disabled = true;
          playAgain();
        }  else {
          game(false, `${guess} is not correct :( Try again. ${guessesLeft} guesses left`);
        }
   }
});


// set msg depend on winning/loosing
function game(won,msg) {
  let color;
  won === true ? color = "green" : color = "red";

  message.style.color = color;
  guessInput.style.borderColor = color;
  guessInput.value = "";

  setMessage(msg);
}


//start again - won/lost
function playAgain() {
  guessBtn.value = "play again"
  guessBtn.addEventListener("mousedown", reloadGame);
}


//reload window
function reloadGame() {
  window.location.reload();
}

//set message for player
function setMessage(msg) {
  message.textContent = msg;
}