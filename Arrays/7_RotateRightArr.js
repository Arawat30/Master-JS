//7. Rotate an array to the right by a specific number of positions.

function rotateArrRight(arr, pos) {
  let arrLen = arr.length;
  let res = [];

  arr.map((item, index) => {
    if (index + pos < arrLen) {
      res[index + pos] = arr[index];
    } else {
      res[index + pos - arrLen] = arr[index];
    }
  });

  return res;
}

console.log(rotateArrRight([1, 2, 3, 4, 5], 1));
