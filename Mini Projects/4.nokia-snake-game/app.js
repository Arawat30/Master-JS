document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const scoreDisplay = document.querySelector("span");
  const startBtn = document.querySelector(".start");

  const width = 10;
  let appleIndex = 0;
  let currentSnake = [2, 1, 0];
  let direction = 1;
  let score = 0;
  let speed = 0.5;
  let intervalTime = 0;
  let interval = 0;

  document.addEventListener("keyup", control);
  startBtn.addEventListener("click", startGame);

  function startGame() {
    reset();
    interval = setInterval(moveOutcomes, intervalTime);
  }

  function reset() {
    currentSnake.forEach((index) => squares[index].classList.remove("snake"));
    squares[appleIndex].classList.remove("apple");
    clearInterval(interval);
    score = 0;
    randomApple();
    direction = 1;
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0]; // 0 is last element(head of the snake)
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
  }

  function moveOutcomes() {
    if (
      (currentSnake[0] + width >= width * width && direction === width) || //if snake hits bottom
      (currentSnake[0] % width === width - 1 && direction === 1) || //if snake hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
      (currentSnake[0] - width < 0 && direction === -width) || //if snake hits the top
      squares[currentSnake[0] + direction].classList.contains("snake") //if snake goes into itself
    ) {
      alert("hit the wall/itself");
      clearInterval(interval);
      reset();
      return;
    } else {
      //moving snake after each intervalTime
      const tail = currentSnake.pop(); // ex :for first case, [2,1,0] removes 0 from last
      squares[tail].classList.remove("snake");
      currentSnake.unshift(currentSnake[0] + direction);// currentSnake[0] = 2, direction = 1, [3,2,1]

      //if snake eats the apple
      if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[currentSnake[0]].classList.remove("apple");
        squares[tail].classList.add("snake");
        currentSnake.push(tail);
        randomApple();
        score++;
        scoreDisplay.textContent = score;
        clearInterval(interval);
        intervalTime = intervalTime * speed;// increasing speed
        interval = setInterval(moveOutcomes, intervalTime);//reducing intervalTime
      }

      //new tail added visually
      squares[currentSnake[0]].classList.add("snake");
    }
  }

  //generating apple randomly
  function randomApple() {
    /*This means that the condition in the do statement will keep 
    on running until it finds a spot that does not contain a snake 
    (keep doing this while this is true). Once it finds a spot it 
    simply gives that spot a class of apple.*/
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains("snake"));

    squares[appleIndex].classList.add("apple");
  }

  //assign functions to keycodes
  function control(e) {
    if (e.keyCode === 39) {
      if (direction == -1) {
        currentSnake.reverse();
      }
      direction = 1; //if we press the right arrow on our keyboard, the snake will go right one
    } else if (e.keyCode === 38) {
      direction = -width; // if we press the up arrow, the snake will go back ten divs, appearing to go up
    } else if (e.keyCode === 37) {
      if (direction == 1) {
        currentSnake.reverse();
      }
      direction = -1; // if we press left, the snake will go left one div
    } else if (e.keyCode === 40) {
      direction = +width; //if we press down, the snake head will instantly appear in the div ten divs from where you are now
    }
  }
});
