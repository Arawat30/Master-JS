const squareDiv = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let countDownTimer = 60;
let moleTimer;

function randomSquare() {
  //function starts with clearing the mole position
  squareDiv.forEach((square) => {
    square.classList.remove("mole");
  });
  //randomly generating the position for mole
  let randomSquare = squareDiv[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  //saving mole's position in the random square
  hitPosition = randomSquare.id;
}

//adding eventlisteners for all square divs in grid
squareDiv.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.innerHTML = result;
      hitPosition = null;
    }
  });
});

//randomly generating mole position every 500ms
(function moveMole() {
  moleInterval = setInterval(randomSquare, 500);
})();

//countdown function for reducing the 60s
function countDown() {
  countDownTimer--;
  timeLeft.innerHTML = countDownTimer;

  if (countDownTimer === 0) {
    alert("Time's Up, final score = " + result);
    clearInterval(countDownTimerId);
    clearInterval(moleTimer);
  }
}

//setInterval is invoked for timer to reducing -1 from countdownTimer every 1000ms
//countDownTimerId stored to stop the setInterval
let countDownTimerId = setInterval(countDown, 1000);
