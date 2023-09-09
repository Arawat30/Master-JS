document.addEventListener("DOMContentLoaded", () => {
  //cards array containing 2 of each type
  const cardArray = [
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "milkshake", img: "images/milshake.png" },
    { name: "pizza", img: "images/pizza.png" },
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "milkshake", img: "images/milshake.png" },
    { name: "pizza", img: "images/pizza.png" },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let score = 0;

  //creating a game board via js (can be created in html)
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img"); //creating img tag
      card.setAttribute("src", "images/blank.png"); //intialize img with blank
      card.setAttribute("data-id", i); //unique ids
      card.addEventListener("click", flipcard);
      grid.appendChild(card); //appending at the end of grid id element
    }
  }
  createBoard();

  //check For Match
  function checkForMatch() {
    //storing all cards in grid
    const cards = document.querySelectorAll("img");

    if (cardsChosenId[0] == cardsChosenId[1]) {
      alert("Same Element, select other element");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      //changing matched pair src to blank
      cards[cardsChosenId[0]].setAttribute("src", "images/white.png");
      cards[cardsChosenId[1]].setAttribute("src", "images/white.png");

      // removing click handlers from matched img tags
      cards[cardsChosenId[0]].removeEventListener("click", flipcard);
      cards[cardsChosenId[1]].removeEventListener("click", flipcard);

      alert("Match Found");
      score++
    } else {
      cards[cardsChosenId[0]].setAttribute("src", "images/blank.png");
      cards[cardsChosenId[1]].setAttribute("src", "images/blank.png");
      alert("No match");
    }

    cardsChosen = [];
    cardsChosenId = [];

    // showing results on resultDisplay element
    resultDisplay.textContent = score < 6? score:"You won";
  }

  //flip card

  function flipcard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length == 2) {
      setTimeout(checkForMatch, 500);
    }
  }
});
