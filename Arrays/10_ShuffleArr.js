//10. Implement a function to shuffle an array.

function shuffleArr(arr){
    arr.sort(() => Math.random() - 0.5);
}

//Fisher–Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

